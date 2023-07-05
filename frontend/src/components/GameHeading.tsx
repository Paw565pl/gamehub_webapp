import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import useParentPlatform from "../hooks/useParentPlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatformName = useParentPlatform(selectedPlatformId)?.name;

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenreName = useGenre(selectedGenreId)?.name;

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
