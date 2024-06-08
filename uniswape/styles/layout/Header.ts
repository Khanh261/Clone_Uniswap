import { COLORS, Z_INDEX } from "@/constans/css";
import {
  Box,
  Flex,
  Input,
  Text,
  InputGroup,
  Img,
  chakra,
} from "@chakra-ui/react";

const HeaderWrapper = chakra(Box, {
  baseStyle: {
    width: "100%",
    position: "sticky",
    top: 0,
    zIndex: Z_INDEX.STICKY,
    bg: "#131313",
    minHeight: "72px",
    height: "72px",
    alignItems: "center",
  },
});

const HeaderContent = chakra(Flex, {
  baseStyle: {
    w: "100%",
    h: "auto",
    justifyContent: "space-around",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "20px 12px",
  },
});

const LeftContentHeader = chakra(Flex, {
  baseStyle: {
    w: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#9B9B9B",
    maxH: "32px",
  },
});

const NavItem = chakra(Box, {
  baseStyle: {
    color: "#9B9B9B",
    cursor: "pointer",
    _hover: {
      color: "#FFFFFF",
      bg: "rgb(59,64,64)",
      borderRadius: "14px",
    },
    display: {
      base: "none",
      md: "flex",
    },
  },
});

const CustomInputGroup = chakra(InputGroup, {
  baseStyle: {
    display: {
      base: "none",
      md: "flex",
    },
  },
});

const MiddleContentHeader = chakra(Input, {
  baseStyle: {
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #9B9B9B",
    borderRadius: "20px",
    color: COLORS.PRIMARY,
    placeContent: "center",
    py: "8px",
    px: "12px",
    p: "8px 12px ",
    _focus: {
      border: "1px solid #9B9B9B",
    },
    _hover: {
      boxShadow: "0px 0px 0px 1px #FF007A",
    },
  },
});

const RightContentHeader = chakra(Flex, {
  baseStyle: {
    w: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    color: COLORS.PRIMARY,
    gap: {
      base: "10px",
    },
  },
});

const SearchIcon = chakra(Img, {
  baseStyle: {
    w: "24px",
    h: "24px",
  },
});

const SlashIcon = chakra(Img, {
  baseStyle: {
    w: "24px",
    h: "24px",
  },
});

const CustomText = chakra(Text, {
  baseStyle: {
    color: COLORS.SECONDARY,
    fontSize: "16px",
    display: {
      base: "none",
      md: "block",
    },
  },
});

const ButtonDropdown = chakra(Flex, {
  baseStyle: {
    boxSizing: "border-box",
    justifyContent: "space-between",
    gap: "8px",
    _hover: {
      bg: "gray.800",
    },
    p: "10px",
    borderRadius: "20px",
    cursor: "pointer",
  },
});

const ConnectButton = chakra(Flex, {
  baseStyle: {
    boxSizing: "border-box",
    p: "10px 20px 10px 20px",
    color: "#FC72FF",
    backgroundColor: "#131313",
    cursor: "pointer",
    borderRadius: "20px",
    bg: "#311c31",
    _hover: {
      filter: "brightness(0.8)",
    },
  },
});

const EthIcon = chakra(Img, {
  baseStyle: {
    w: "20px",
    h: "20px",
  },
});

const DropdownIcon = chakra(Img, {
  baseStyle: {
    w: "20px",
    h: "20px",
  },
});

const AppleIcon = chakra(Img, {
  baseStyle: {
    w: "20px",
    h: "20px",
  },
});

const GooglePlayIcon = chakra(Img, {
  baseStyle: {
    w: "20px",
    h: "20px",
  },
});

export {
  ConnectButton,
  HeaderWrapper,
  HeaderContent,
  LeftContentHeader,
  MiddleContentHeader,
  RightContentHeader,
  NavItem,
  CustomInputGroup,
  ButtonDropdown,
  CustomText,
  SearchIcon,
  SlashIcon,
  EthIcon,
  DropdownIcon,
  AppleIcon,
  GooglePlayIcon,
};
