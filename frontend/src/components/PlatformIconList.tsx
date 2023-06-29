import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useParentPlatforms";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    mac: FaApple,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={iconMap[platform.slug]}
          color="gray.500"
        ></Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconList;
