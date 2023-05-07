import { Text, Textarea, useStatStyles } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import apiClient from '../Services/api-client';

interface Games {
  id: number;
  name: string;
}

interface FetchResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient
      .get<FetchResponse>('/games')
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
