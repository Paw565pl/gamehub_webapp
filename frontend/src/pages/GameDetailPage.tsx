import { GridItem, Heading, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import GameScreenshots from "../components/GameScreenshots";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (error) throw error;

  if (isLoading) return null

  return (
    <>
      <Heading textAlign={["center", "left"]} marginBottom={"0.5em"}>
        {game.name}
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={"1em"}>
        <GridItem>
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
