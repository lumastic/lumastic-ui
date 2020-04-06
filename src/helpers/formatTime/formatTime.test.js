import formatTime from ".";

describe("Time ago tests", () => {
  test("less than 1m ago", () => {
    expect(
      formatTime({
        time: "2020-04-06T18:19:00.000Z",
        sinceDate: new Date(Date.parse("2020-04-06T18:19:59.000Z"))
      })
    ).toStrictEqual("just now");
  });
  test("exactly 10m ago", () => {
    expect(
      formatTime({
        time: "2020-04-06T18:19:00.000Z",
        sinceDate: new Date(Date.parse("2020-04-06T18:29:00.000Z"))
      })
    ).toStrictEqual("10m");
  });
  test("exactly 1hr ago", () => {
    expect(
      formatTime({
        time: "2020-04-06T18:19:00.000Z",
        sinceDate: new Date(Date.parse("2020-04-06T19:19:00.000Z"))
      })
    ).toStrictEqual("1hr");
  });
  test("exactly 6hr ago", () => {
    expect(
      formatTime({
        time: "2020-04-06T18:19:00.000Z",
        sinceDate: new Date(Date.parse("2020-04-07T00:19:00.000Z"))
      })
    ).toStrictEqual("6hr");
  });
  test("a little over 6hr ago", () => {
    expect(
      formatTime({
        time: "2020-04-06T18:19:00.000Z",
        sinceDate: new Date(Date.parse("2020-04-07T00:24:00.000Z"))
      })
    ).toStrictEqual("6hr");
  });
  test("exactly 1d ago", () => {
    expect(
      formatTime({
        time: "2020-04-06T18:19:00.000Z",
        sinceDate: new Date(Date.parse("2020-04-07T18:19:00.000Z"))
      })
    ).toStrictEqual("Apr 6");
  });

  test("full date", () => {
    expect(
      formatTime({
        time: "2020-04-06T18:19:00.000Z",
        fullDate: true
      })
    ).toStrictEqual("April 6, 2020");
  });
  test("full date and time", () => {
    expect(
      formatTime({
        time: "2020-04-06T18:19:00.000Z",
        fullDate: true,
        withTime: true
      })
    ).toStrictEqual("April 6, 2020 14:19");
  });
});
