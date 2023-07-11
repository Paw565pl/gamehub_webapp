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
      {game?.parent_platforms && (
        <DefinitionItem term="Platforms">
          {game?.parent_platforms?.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>
      )}
      <DefinitionItem term="Metascore">
        <CriticScore score={game.metacritic}></CriticScore>
      </DefinitionItem>
      <DefinitionItem term="Genres">
        {game.genres?.map((genre) => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Publishers">
        {game.publishers?.map((publisher) => (
          <HStack key={publisher.id}>
            <Image src={publisher.image_background} boxSize={5}></Image>
            <Text>{publisher.name}</Text>
          </HStack>
        ))}
      </DefinitionItem>
      <DefinitionItem term="Release Date">
        <Text>{game.released}</Text>
      </DefinitionItem>
      <DefinitionItem term="Website">
        <Link href={game.website} target={"_blank"}>
          <Text>find out more</Text>
        </Link>
      </DefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
