import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
} from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const navigate = useNavigate();
  const { colorMode } = useColorMode();
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current?.value) {
      setSearchQuery(searchRef.current.value);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box paddingX={{ sm: "1.5em", lg: "8em", xl: "15em" }}>
        <InputGroup>
          <InputLeftElement
            children={<BsSearch />}
            as={"button"}
            type="submit"
          />
          <Input
            ref={searchRef}
            borderRadius={20}
            placeholder="Search games..."
            variant={"filled"}
            focusBorderColor={colorMode === "dark" ? "white" : "black"}
          />
        </InputGroup>
      </Box>
    </form>
  );
};

export default SearchInput;
