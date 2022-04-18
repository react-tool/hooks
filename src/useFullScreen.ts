import { useRef, useState } from "react";

export default function useFullScreen<
  T extends HTMLElement = HTMLDivElement
>() {
  const screenRef = useRef<T>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const onToggleFullScreen = () => {
    isFullScreen ? exitFullScreen() : enterFullScreen();
    setIsFullScreen(!isFullScreen);
  };

  const enterFullScreen = () => {
    if (screenRef.current?.requestFullscreen)
      screenRef.current.requestFullscreen();
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) document.exitFullscreen();
  };

  return {
    screenRef,
    onToggleFullScreen,
  };
}
