import { Box, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <Box>
      <Switch
        aria-label="toggleColorMode"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme={"whiteAlpha"}
        size={"lg"}
      ></Switch>
    </Box>
  );
};

export default ColorModeSwitch;
