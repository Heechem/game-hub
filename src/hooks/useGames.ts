import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";

import APIClient, { FetchResponses } from "../Services/api-client";
import { Platform } from "./usePlatforms";

const apiClient = new APIClient<Games>("games");

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  rating: number;
}
const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponses<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

export default useGames;
