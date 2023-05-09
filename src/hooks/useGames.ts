import { useState, useEffect } from 'react';
import apiClient from '../Services/api-client';
import { CanceledError } from 'axios';
import useData from './useData';

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

const useGames = () => useData<Games>('/games');

export default useGames;
