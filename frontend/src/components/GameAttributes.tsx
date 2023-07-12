import { HStack, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid
      as={"dl"}
      columns={{ sm: 1, md: 2 }}
      marginY={"1.5em"}
      gap={"2em"}
    >
      <DefinitionItem term="Platforms">
        {game.parent_platforms ? (
          game.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))
        ) : (
          <Text>N/A</Text>
        )}
      </DefinitionItem>
      <DefinitionItem term="Metascore">
        {game.metacritic ? (
          <CriticScore score={game.metacritic}></CriticScore>
        ) : (
          <Text>N/A</Text>
        )}
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres.length !== 0 ? (
          game.genres.map((genre) => <Text key={genre.id}>{genre.name}</Text>)
        ) : (
          <Text>N/A</Text>
        )}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers.length !== 0 ? (
          game.publishers.map((publisher) => (
            <HStack key={publisher.id}>
              <Image src={publisher.image_background} boxSize={5}></Image>
              <Text>{publisher.name}</Text>
            </HStack>
          ))
        ) : (
          <Text>N/A</Text>
        )}
      </DefinitionItem>
      <DefinitionItem term="Release Date">
        <Text>{game.released || "N/A"}</Text>
      </DefinitionItem>
      <DefinitionItem term="Website">
        {game.website ? (
          <Link href={game.website} target={"_blank"}>
            find out more
          </Link>
        ) : (
          <Text>N/A</Text>
        )}
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
