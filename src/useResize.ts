import { useCallback, useState } from "react";
import useWindowEventListener from "./useWindowEventListener";

export default function useResize(
  dimensions: "width" | "height",
  initialValue: number
) {
  const [isResizing, setIsResizing] = useState(false);
  const [changedSize, setChangedSize] = useState(initialValue);

  const startResizing = useCallback(() => setIsResizing(true), []);
  const stopResizing = useCallback(() => setIsResizing(false), []);

  const onResize = useCallback(
    (mouseMoveEvent: MouseEvent) => {
      if (isResizing) {
        const { clientX, clientY } = mouseMoveEvent;
        setChangedSize(dimensions === "width" ? clientX : clientY);
      }
    },
    [isResizing, dimensions]
  );

  useWindowEventListener("mousemove", onResize);
  useWindowEventListener("mouseup", stopResizing);

  return {
    startResizing,
    changedSize,
  };
}
