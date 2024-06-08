import { COLORS } from "@/constans/css";
import { breakPoints } from "@/pages/themes/theme";
import { Flex, Text, VStack, Wrap, chakra } from "@chakra-ui/react";
import Link from "next/link";

const FooterWrapper = chakra(Flex, {
  baseStyle: {
    width: breakPoints.xl,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    bottom: 0,
    height: {
      base: "fit-content",
      xl: "194px",
    },
    maxHeight: {
      base: "fit-content",
      xl: "194px",
    },
  },
});

const FooterContent = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "auto",
    flexDirection: {
      base: "column",
      lg: "row",
    },
    justifyContent: "space-between",
    gap: "32px",
    boxSizing: "border-box",
    color: COLORS.SECONDARY,
  },
});

const LeftColumn = chakra(VStack, {
  baseStyle: {
    flex: 1,
    height: "auto",
    justifyContent: "flex-start",
    alignItems: "start",
    justifyItems: "start",
    fontSize: "24px",
  },
});

const LeftContent = chakra(Flex, {
  baseStyle: {
    flex: 1,
    color: COLORS.SECONDARY,
  },
});

const RightContent = chakra(Flex, {
  baseStyle: {
    flex: 1,
    w: "100%",
    justifyContent: "center",
    alignItems: "start",
    color: COLORS.SECONDARY,
  },
});

const MainTitle = chakra(Text, {
  baseStyle: {
    color: COLORS.SECONDARY,
    fontWeight: 500,
    fontSize: "18px",
  },
});

const CustomLogo = chakra(Flex, {
  baseStyle: {
    alignContent: "center",
    width: "100%",
    gap: "15px",
    marginTop: "64px",
  },
});

const Information = chakra(Flex, {
  baseStyle: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    width: { base: "100%", xl: "624px" },
  },
});

const Column = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "4px",
    "> a": {
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0.32px",
      whiteSpace: "nowrap",
      color: "#5C5C5C",
    },
  },
});

const LinkStyle = chakra(Link, {
  baseStyle: {
    _hover: {
      textDecoration: "none",
      color: "#fff",
    },
  },
});

export {
  LinkStyle,
  LeftColumn,
  CustomLogo,
  FooterWrapper,
  FooterContent,
  LeftContent,
  RightContent,
  MainTitle,
  Column,
  Information,
};
