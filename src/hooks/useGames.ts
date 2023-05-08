import { useState, useEffect } from 'react';
import apiClient from '../Services/api-client';
import { CanceledError } from 'axios';

export interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platfrom: Platfrom }[];
}

interface FetchResponse {
  count: number;
  results: Games[];
}

const useGames = () => {
  const controler = new AbortController();
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchResponse>('/games', { signal: controler.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setError(err.message);
      });

    return () => controler.abort();
  }, []);

  return { games, error };
};

export default useGames;
