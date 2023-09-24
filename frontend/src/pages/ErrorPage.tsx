import { Box, Heading, Text } from "@chakra-ui/react";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  return (
    <Box padding={"1em"}>
      <NavBar></NavBar>
      <Box padding={"1em 2em"}>
        <Heading>Oops</Heading>
        <Text>Something went wrong. Please try again.</Text>
      </Box>
    </Box>
  );
};

export default ErrorPage;
