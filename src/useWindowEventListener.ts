import { useEffect, useRef } from "react";

export default function useWindowEventListener<K extends keyof WindowEventMap>(
  event: K,
  handler: (event: WindowEventMap[K]) => void
) {
  const savedHandler = useRef<(event: WindowEventMap[K]) => void>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: WindowEventMap[K]) =>
      savedHandler.current!(event);

    window.addEventListener(event, eventListener);

    return () => {
      window.removeEventListener(event, eventListener);
    };
  }, [event]);
}
