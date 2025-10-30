import { API_URL } from "@/constants/Api";
import useSWR from "swr";
import fetcher from "./_fetcher";

export default function useUsers() {
  const { data, error, isLoading } = useSWR(`${API_URL}/users`, fetcher);

  return { data, isError: error, isLoading };
}
