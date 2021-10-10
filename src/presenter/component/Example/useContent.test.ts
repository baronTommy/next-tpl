import { renderHook } from "@testing-library/react-hooks";
import { useContent } from "./useContent";

describe("useContent", () => {
  test("動作確認", () => {
    expect(renderHook(useContent)).toBeDefined();
  });
});
