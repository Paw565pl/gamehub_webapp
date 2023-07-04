import { GridItem, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import GameTrailer from "../components/GameTrailer";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (error) return <Text padding={"1em"}>{error.message}</Text>;

  if (isLoading) return <Spinner></Spinner>;

  return (
    <>
      <Heading marginBottom={"0.25em"}>{game.name}</Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={"1em"}>
        <GridItem>
          <GameTrailer gameId={game.id}></GameTrailer>
          <GameScreenshots gameId={game.id}></GameScreenshots>
        </GridItem>
        <GridItem>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game}></GameAttributes>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default GameDetailPage;
