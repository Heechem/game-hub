import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import platforms from "../Data/platforms";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);

  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Game`;
  return (
    <Heading
      as="h1"
      my={1}
      fontSize={"5xl"}
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
