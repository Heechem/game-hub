import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genre from "../Data/genre";
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
    staleTime: ms("24"),
    initialData: genre,
  });

export default useGenres;
