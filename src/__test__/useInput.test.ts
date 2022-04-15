import { act, renderHook } from "@testing-library/react-hooks";
import { useInput } from "..";

describe("useInput", () => {
  test("useInput returns a tuple of three values", () => {
    const { result } = renderHook(() => useInput(""));
    const [value, onChange, setValue] = result.current;
    expect(value).toBe("");
    expect(onChange).toBeInstanceOf(Function);
    expect(setValue).toBeInstanceOf(Function);
  });

  test("onChange function can change value", () => {
    const { result } = renderHook(() => useInput(""));

    act(() => {
      result.current[1]({
        target: { value: "testing" },
      } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
    });

    expect(result.current[0]).toBe("testing");
  });

  test("setValue can change value", () => {
    const { result } = renderHook(() => useInput(""));

    act(() => {
      result.current[2]("testing");
    });

    expect(result.current[0]).toBe("testing");
  });
});
