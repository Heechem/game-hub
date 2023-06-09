import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import genre from "../Data/genre";
import APIClient from "../Services/api-client";
import { Genre } from "../entites/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () =>
  useQuery({
    queryKey: ["genre"],
    queryFn: apiClient.getAll,
    staleTime: ms("24"),
    initialData: genre,
  });

export default useGenres;
