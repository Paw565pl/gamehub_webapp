import { Icon, useColorMode } from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { stack as SideMenu } from "react-burger-menu";
import { SlMenu } from "react-icons/sl";

// necessary css
// #react-burger-menu-btn {
//     top: 1.5rem !important;
//     left: 1rem !important;
//     width: 1.5rem !important;
//     height: 1.5rem !important;
// }

interface Props {
  children: ReactNode;
}

const SideBar = ({ children }: Props) => {
  const { colorMode } = useColorMode();
  const [isOpened, setIsOpened] = useState(false);

  return (
    <SideMenu
      isOpen={isOpened}
      onOpen={() => setIsOpened(true)}
      onClose={() => setIsOpened(false)}
      styles={{
        bmBurgerButton: {
          width: "1.5em",
          height: "1.5em",
        },
        bmMenu: {
          background: colorMode === "dark" ? "#121212" : "#ffffff",
          paddingLeft: "1em",
          top: "-3em",
          left: "-1em",
          position: "relative",
        },
        bmOverlay: {
          top: "0",
          left: "0",
          background: "rgba(0, 0, 0, 0.3)",
        },
      }}
      customBurgerIcon={<Icon as={SlMenu}></Icon>}
    >
      <Icon
        as={SlMenu}
        boxSize={"1.5em"}
        marginTop={"1.5em"}
        marginBottom={"1em"}
        onClick={() => setIsOpened(false)}
        cursor={"pointer"}
      ></Icon>
      {children}
    </SideMenu>
  );
};

export default SideBar;
