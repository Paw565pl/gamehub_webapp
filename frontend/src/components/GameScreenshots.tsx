import { Box, Image, Skeleton, Spinner } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/ImageUrl";

interface Props {
  gameId: string | number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  if (screenshots.results.length === 0)
    return (
      <Image
        fallback={<Skeleton aspectRatio={1.5 / 1}></Skeleton>}
        src={getCroppedImageUrl()}
        objectFit={"cover"}
        alt={"no image placeholder"}
      ></Image>
    );

  const images = screenshots.results.map((screenshot) => screenshot.image);

  return (
    <Box style={{ position: "relative", aspectRatio: "1.5/1" }}>
      <SimpleImageSlider
        width={"100%"}
        height={"100%"}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        autoPlayDelay={8}
      />
    </Box>
  );
};

export default GameScreenshots;
