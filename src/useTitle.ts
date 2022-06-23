import { useCallback, useEffect } from "react";

export default function useTitle(title: string) {
  const onChangeTitle = useCallback(() => (document.title = title), [title]);

  useEffect(() => {
    onChangeTitle();
  }, [onChangeTitle]);
}
