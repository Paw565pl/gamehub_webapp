import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/ImageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data: genres, error, isLoading, isSuccess } = useGenres();
  const { colorMode } = useColorMode();

  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <>
      {error && null}
      {isLoading && <Spinner></Spinner>}
      <List paddingX={"0.25em"}>
        {isSuccess &&
          genres?.results.map((genre) => (
            <ListItem paddingY={"0.3em"} key={genre.id}>
              <HStack>
                <Image
                  _hover={{ cursor: "pointer" }}
                  onClick={() => setSelectedGenreId(genre.id)}
                  boxSize={"32px"}
                  borderRadius={8}
                  loading={"lazy"}
                  src={getCroppedImageUrl(genre.image_background)}
                  alt={genre.name + " image"}
                ></Image>
                <Button
                  onClick={() => setSelectedGenreId(genre.id)}
                  fontSize={"lg"}
                  variant={"link"}
                  color={colorMode === "light" ? "black" : ""}
                  fontWeight={
                    selectedGenreId === genre.id ? "extrabold" : "normal"
                  }
                  whiteSpace={"normal"}
                  textAlign={"left"}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      </List>
    </>
  );
};

export default GenreList;
