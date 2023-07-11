import { Box } from "@chakra-ui/react";
import SimpleImageSlider from "react-simple-image-slider";
import useScreenshots from "../hooks/useScreenshots";
import getCroppedImageUrl from "../services/ImageUrl";

interface Props {
  gameId: string | number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, error, isLoading } = useScreenshots(gameId);

  if (error || isLoading) return null;

  const images = screenshots?.results.map((screenshot) =>
    getCroppedImageUrl(screenshot.image)
  );

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
