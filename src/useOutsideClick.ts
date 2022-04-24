import { useCallback, useRef } from "react";
import useWindowEventListener from "./useWindowEventListener";

export default function useOutSideClick<T extends HTMLElement = HTMLDivElement>(
  isOpen: boolean,
  onClose: () => void
) {
  const targetEl = useRef<T>(null);

  const onClickOutSide = useCallback(
    (e: MouseEvent) => {
      const { target } = e;
      if (target instanceof Node) {
        if (isOpen && !targetEl.current?.contains(target)) onClose();
      }
    },
    [isOpen, onClose]
  );

  useWindowEventListener("click", onClickOutSide);

  return targetEl;
}
