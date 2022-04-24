import { renderHook } from "@testing-library/react-hooks";
import { fireEvent } from "@testing-library/react";
import { useWindowEventListener } from "..";

describe("useWindowEventListener", () => {
  test("When event is emitted, handler function is executed", () => {
    const handler = jest.fn();
    renderHook(() => useWindowEventListener("click", handler));

    fireEvent.click(window);

    expect(handler).toBeCalled();
  });

  test("When multiple events are emitted, handler functions are executed", () => {
    const clickHandler = jest.fn();
    const keydownHandler = jest.fn();
    renderHook(() => useWindowEventListener("click", clickHandler));
    renderHook(() => useWindowEventListener("keydown", keydownHandler));

    fireEvent.click(window);
    fireEvent.keyDown(window);

    expect(clickHandler).toHaveBeenCalledWith(expect.any(MouseEvent));
    expect(keydownHandler).toHaveBeenCalledWith(expect.any(KeyboardEvent));
  });
});
