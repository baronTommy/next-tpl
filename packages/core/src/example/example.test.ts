import { example } from "./example";

describe("example", () => {
  test("動作確認", () => {
    expect(example()).toBeDefined();
  });
});
