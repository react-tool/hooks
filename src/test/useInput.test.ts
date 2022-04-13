import { renderHook } from "@testing-library/react-hooks";
import { useInput } from "..";

describe("useInput", () => {
  test("useInput returns a tuple of three values", () => {
    const { result } = renderHook(() => useInput(""));
    const [value, onChange, setValue] = result.current;
    expect(value).toBe("");
    expect(onChange).toBeInstanceOf(Function);
    expect(setValue).toBeInstanceOf(Function);
  });
});
