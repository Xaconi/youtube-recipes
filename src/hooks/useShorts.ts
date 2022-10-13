// Code
import { useState } from "react"
import { getShorts as getShortsAPI } from "../services/youtube";

export const useShorts = (keyword: string) => {
  const [shorts, setShorts] = useState<string>('');

  const getShorts = async () => {
    const response = await getShortsAPI(keyword);

    // @TODO proper youtube response object
    setShorts(response);
  }

  return { getShorts, shorts };
}
