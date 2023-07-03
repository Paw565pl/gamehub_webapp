import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/ImageUrl";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={"99%"}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        objectFit={"cover"}
        alt={game.name + " image"}
      ></Image>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={"0.5em"}>
          <PlatformIconList
            platforms={game.parent_platforms?.map(({ platform }) => platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
