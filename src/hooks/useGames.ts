import { useState, useEffect } from 'react';
import apiClient from '../Services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';
import { Genre } from './useGenres';

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
const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platfrom | null
) =>
  useData<Games>(
    '/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
