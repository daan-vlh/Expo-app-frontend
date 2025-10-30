import { API_URL } from "@/constants/Api";
import useSWR from "swr";
import fetcher from "./_fetcher";

export default function useMessages() {
  const { data, error, isLoading } = useSWR(`${API_URL}/messages`, fetcher);

  return { data, error, isLoading };
}
