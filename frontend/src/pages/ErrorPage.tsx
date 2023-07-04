import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding={"1em"}>
      <NavBar></NavBar>
      <Box padding={"1em 2em"}>
        <Heading>Oops</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page does not exist."
            : "Something went wrong. Please try again."}
        </Text>
      </Box>
    </Box>
  );
};

export default ErrorPage;
