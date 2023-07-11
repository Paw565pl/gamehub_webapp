import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Skeleton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Game from "../entities/Game";
import getCroppedImageUrl from "../services/ImageUrl";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card height={"99%"}>
      <Link to={`/games/${game.slug}`} style={{ display: "contents" }}>
        <Image
          fallback={<Skeleton aspectRatio={1.5 / 1}></Skeleton>}
          src={getCroppedImageUrl(game.background_image)}
          objectFit={"cover"}
          alt={game.name + " image"}
        ></Image>
      </Link>
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={"0.5em"}>
          <PlatformIconList
            platforms={game?.parent_platforms?.map(({ platform }) => platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Link to={`/games/${game.slug}`}>
          <Heading fontSize="2xl">{game.name}</Heading>
        </Link>
      </CardBody>
    </Card>
  );
};

export default GameCard;
