import { act, renderHook } from "@testing-library/react-hooks";
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

  test("onToggle function can change value reverse", () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[1]();
    });

    expect(result.current[0]).toBe(true);
  });

  test("setValue function can change value", () => {
    const { result } = renderHook(() => useToggle(false));

    act(() => {
      result.current[2](true);
    });

    expect(result.current[0]).toBe(true);
  });
});
