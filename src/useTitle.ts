import { useEffect, useState } from "react";

export default function useTitle(initialTitle: string) {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    document.title = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
}
