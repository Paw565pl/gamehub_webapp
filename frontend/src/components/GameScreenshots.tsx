import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/ImageUrl";

interface Props {
  gameId: string | number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (error || isLoading) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={2}>
      {screenshots.results.map((screenshot) => (
        <Image
          alt={"game screenshot " + screenshot.id}
          key={screenshot.id}
          src={getCroppedImageUrl(screenshot.image)}
        ></Image>
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
