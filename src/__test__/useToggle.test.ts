import { renderHook } from "@testing-library/react-hooks";
import { useToggle } from "..";

describe("useToggle", () => {
  test("useToggle returns a tuple of three values", () => {
    const { result } = renderHook(() => useToggle(false));
    const [value, onToggle, setValue] = result.current;
    expect(value).toBe(false);
    expect(onToggle).toBeInstanceOf(Function);
    expect(setValue).toBeInstanceOf(Function);
  });

  test("useToggle default value is false", () => {
    const { result } = renderHook(() => useToggle());
    const [value] = result.current;
    expect(value).toBe(false);
  });
});
