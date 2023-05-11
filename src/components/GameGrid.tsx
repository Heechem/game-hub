import {
  SimpleGrid,
  Skeleton,
  Text,
  Textarea,
  useStatStyles,
} from '@chakra-ui/react';
import useGames, { Platfrom } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeloton from './GameCardSkeloton';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { GameQuery } from '../App';

interface Props {
  gameQeury: GameQuery;
}

const GameGrid = ({ gameQeury }: Props) => {
  const { data, error, isLoading } = useGames(gameQeury);
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} p='12px' spacing={3}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeloton />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
