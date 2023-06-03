import { useQuery } from '@tanstack/react-query';
import genre from '../Data/genre';
import useData, { FetchResponses } from './useData';
import apiClient from '../Services/api-client';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: () =>
      apiClient.get<FetchResponses<Genre>>('/genres').then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: genre.length, results: genre },
  });

export default useGenres;
