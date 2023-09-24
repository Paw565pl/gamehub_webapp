import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

const SearchInput = () => {
  const setSearchQuery = useGameQueryStore((s) => s.setSearchQuery);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchRef.current?.value) {
      setSearchQuery(searchRef.current.value);
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
          />
        </InputGroup>
      </Box>
    </form>
  );
};

export default SearchInput;
