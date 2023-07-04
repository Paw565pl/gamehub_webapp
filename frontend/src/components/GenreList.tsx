import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/ImageUrl";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { data: genres, error, isLoading, isSuccess } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  return (
    <>
      {error && null}
      {isLoading && <Spinner></Spinner>}
      <List>
        {isSuccess &&
          genres?.results.map((genre) => (
            <ListItem paddingY={"0.3em"} key={genre.id}>
              <HStack>
                <Image
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
                  fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
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
