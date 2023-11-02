import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

export interface MenuItemType {
  value: string | number;
  label: string;
}

interface Props {
  activeLabel: string;
  items: MenuItemType[] | undefined;
  onClick: (value: string | number) => void;
}

const SelectorMenu = ({ activeLabel, items, onClick }: Props) => {
  return (
    <Box marginRight={[0, 5]} paddingBottom={[2]}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} width={["100%"]}>
          {activeLabel}
        </MenuButton>
        <MenuList>
          {items?.map(({ value, label }) => (
            <MenuItem onClick={() => onClick(value)} key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default SelectorMenu;
