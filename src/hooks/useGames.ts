import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient, { FetchResponses } from "../Services/api-client";
import useGameQueryStore from "../store";
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
  slug: string;
  description_raw: string;
}
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  return useInfiniteQuery<FetchResponses<Games>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms("24"), // 24 hours
  });
};

export default useGames;
