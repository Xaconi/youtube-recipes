// Code
import { useState } from "react"
import { getShorts as getShortsAPI } from "../services/youtube";

export const useShorts = () => {
  const [shorts, setShorts] = useState<string>('');

  const getShorts = async (keyword: string) => {
    const response = await getShortsAPI(keyword);
    setShorts(response.items[0].id.videoId);
  }

  return { getShorts, shorts };
}
