import { useQuery } from "@tanstack/react-query";
import genre from "../Data/genre";
import { FetchResponses } from "../Services/api-client";
import APIClient from "../Services/api-client";

const apiClient = new APIClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genre,
  });

export default useGenres;
