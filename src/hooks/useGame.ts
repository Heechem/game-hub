import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import { Games } from "./useGames";

const apiClient = new APIClient<Games>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
