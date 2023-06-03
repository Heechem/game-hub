import { useQuery } from '@tanstack/react-query';
import useData, { FetchResponses } from './useData';
import apiClient from '../Services/api-client';

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () =>
      apiClient
        .get<FetchResponses<Platform>>('/platforms/lists/parents')
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: PlatformSelector },
  });

export default usePlatforms;
