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
});
