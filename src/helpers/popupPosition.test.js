import popupPosition from "./popupPosition";

const trig = {
  getBoundingClientRect: () => ({
    bottom: 272.03125,
    height: 18,
    left: 249,
    right: 263,
    top: 254.03125,
    width: 14,
    x: 249,
    y: 254.03125
  }),
  offsetTop: 0,
  offsetLeft: 0
};

const popup = {
  width: 118,
  height: 168
};

describe("popupPosition tests", () => {
  it("should calculate to bottom left", () => {
    expect(
      popupPosition(
        { v: "bottom", h: "left" },
        { v: "top", h: "left" },
        trig,
        popup
      )
    ).toBe([254.03125 + 18, 249]);
  });
});
