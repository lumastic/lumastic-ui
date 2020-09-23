import { findMentions } from "./findMentions";
import {
  noMentionsContent,
  singleMentionInvalidUserProfileObject,
  multipleMentions,
  singleMentions
} from "./findMentions.testContent";

describe("can find mentions in press object", () => {
  it("should parse no content", () => {
    expect(findMentions([])).toBeTruthy();
    expect(findMentions([])).toMatchObject([]);
  });
  it("should parse no mentions in content appropriately", () => {
    expect(findMentions(noMentionsContent)).toBeTruthy();

    expect(findMentions(noMentionsContent)).toMatchObject([]);
  });
  it("should parse a mention in content ", () => {
    expect(findMentions(singleMentions)).toBeTruthy();
    expect(findMentions(singleMentions)).toMatchObject([{ id: "jkl1234" }]);
  });
  it("should parse multiple mentions in content", () => {
    expect(findMentions(multipleMentions)).toBeTruthy();
    expect(findMentions(multipleMentions)).toMatchObject([
      { id: "asdf1234" },
      { id: "jkl1234" },
      { id: "LumasticTestUser12" }
    ]);
  });
  it("should not include blank mentions in output", () => {
    expect(findMentions(singleMentionInvalidUserProfileObject)).toBeTruthy();
    expect(findMentions(singleMentionInvalidUserProfileObject)).toMatchObject(
      []
    );
  });
});
