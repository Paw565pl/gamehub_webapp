import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import platformsMap from "../data/platformsMap";
import genresMap from "../data/genresMap";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${
    gameQuery.platformId ? platformsMap[gameQuery.platformId] : ""
  } ${gameQuery.genreId ? genresMap[gameQuery.genreId] : ""} Games`;

  return (
    <Heading as={"h1"} fontSize={"5xl"} whiteSpace={"normal"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
