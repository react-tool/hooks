import React, { useCallback, useState } from "react";

export default function useForm<T>(initialValues: T): {
  form: T;
  onChangeForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
} {
  const [form, setForms] = useState(initialValues);

  const onChangeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setForms({ ...form, [name]: value });
    },
    [form]
  );

  const onResetForm = useCallback(() => {
    setForms(initialValues);
  }, [initialValues]);

  return {
    form,
    onChangeForm,
    onResetForm,
  };
}
