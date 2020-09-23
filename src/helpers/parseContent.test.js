import { parseContent } from "./parseContent";
import {
  parseContentUrlImages,
  parseContentYT
} from "./parseContent.testContent";

describe("can parse known good", () => {
  it("should parse no content", () => {
    expect(parseContent("")).toBeTruthy();
    expect(parseContent("")).toMatchSnapshot();
  });
  it("should parse youtube content", () => {
    expect(parseContent(parseContentYT)).toBeTruthy();
    expect(parseContent(parseContentYT)).toMatchSnapshot();
  });
  it("should parse content with urls and images", () => {
    expect(parseContent(parseContentUrlImages)).toBeTruthy();
    expect(parseContent(parseContentUrlImages)).toMatchSnapshot();
  });
});
