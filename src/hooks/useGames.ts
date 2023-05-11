import { useState, useEffect } from 'react';
import apiClient from '../Services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';
import { Genre } from './useGenres';
import { GameQuery } from '../App';

export interface Platfrom {
  id: number;
  name: string;
  slug: string;
}

export interface Games {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platfrom }[];
  metacritic: number;
}
const useGames = (gameQuery: GameQuery) =>
  useData<Games>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
