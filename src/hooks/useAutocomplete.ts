import { useState } from "react";

export const useAutocomplete = () => {
  const [ text, setText ] = useState<string>('');

  const assignText = (inputText: string) => setText(inputText);

  return {
    assignText,
    text
  }
}
