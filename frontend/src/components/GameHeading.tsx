import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import useParentPlatform from "../hooks/useParentPlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedPlatformName = useParentPlatform(gameQuery.platformId)?.name;
  const selectedGenreName = useGenre(gameQuery.genreId)?.name;

  const heading = `${selectedPlatformName || ""} ${
    selectedGenreName || ""
  } Games`;

  return (
    <Heading as={"h1"} fontSize={"5xl"} whiteSpace={"normal"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
