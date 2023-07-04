import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) {
          setSearchQuery(searchRef.current.value);
          navigate("/");
        }
      }}
    >
      <Box paddingX={{ sm: "1.5em", lg: "4.5em" }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />}></InputLeftElement>
          <Input
            ref={searchRef}
            borderRadius={20}
            placeholder="Search games..."
            variant={"filled"}
          ></Input>
        </InputGroup>
      </Box>
    </form>
  );
};

export default SearchInput;
