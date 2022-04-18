import React, { useRef, useState } from "react";

export default function useDragScroll<
  T extends HTMLElement = HTMLDivElement
>() {
  const scrollRef = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);

  const onDragStart = (e: React.DragEvent<T>) => {
    e.preventDefault();
    setIsDragging(true);
    setStartX(e.pageX + scrollRef.current!.scrollLeft);
  };

  const onDragEnd = () => setIsDragging(false);

  const onDragMove = (e: React.DragEvent<T>) => {
    if (!scrollRef.current) return;
    if (!isDragging) return;
    const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
    scrollRef.current.scrollLeft = startX - e.pageX;
    if (scrollLeft === 0) {
      setStartX(e.pageX);
    } else if (scrollWidth <= clientWidth + scrollLeft) {
      setStartX(e.pageX + scrollLeft);
    }
  };

  return {
    scrollRef,
    onDragStart,
    onDragEnd,
    onDragMove,
  };
}
