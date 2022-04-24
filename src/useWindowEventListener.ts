import { useEffect, useRef } from "react";

export default function useWindowEventListener<K extends keyof WindowEventMap>(
  event: K,
  handler: (event: WindowEventMap[K]) => void
) {
  const handlerRef = useRef<(event: WindowEventMap[K]) => void>();

  useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const eventListener = (event: WindowEventMap[K]) =>
      handlerRef.current!(event);

    window.addEventListener(event, eventListener);

    return () => {
      window.removeEventListener(event, eventListener);
    };
  }, [event]);
}
