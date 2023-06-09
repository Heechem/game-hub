import { useQuery } from "@tanstack/react-query";
import platforms from "../Data/platforms";
import ms from "ms";

import APIClient, { FetchResponses } from "../Services/api-client";
import { Platform } from "../entites/Platform";

const apiClient = new APIClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,

    staleTime: ms("24"),
    initialData: platforms,
  });

export default usePlatforms;
