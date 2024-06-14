import { COLORS } from "@/constans/css";
import { breakPoints } from "@/pages/themes/theme";
import {
  Box,
  Flex,
  chakra,
  Text,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
const ContentStyle = chakra(Box, {
  baseStyle: {
    bg: "#131313",
    w: "100vw",
    display: "flex",
    padding: 0,
    margin: 0,
  },
});

const ContentWrapper = chakra(Flex, {
  baseStyle: {
    margin: "auto",
    flexDirection: "column",
    gap: "120px",
    justifyContent: "space-between",
  },
});

const TrustByMillionsWrapper = chakra(Flex, {
  baseStyle: {
    flexDirection: {
      base: "column",
      xl: "row",
    },
    maxWidth: breakPoints.xl,
    justifyContent: "space-between",
    gap: "16px 24px",
    height: {
      base: "auto",
      xl: "484px",
    },
    maxHeight: {
      base: "auto",
      xl: "484px",
    },
    margin: "auto",
    boxSizing: "border-box",
    padding: {
      base: "0 48px",
      xl: 0,
    },
  },
});

const ConnectWrapper = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    gap: "24px",
    margin: "auto",
    maxHeight: {
      base: "auto",
      xl: "334px",
    },
    height: {
      base: "auto",
      xl: "334px",
    },
    color: COLORS.SECONDARY,
    inset: "auto",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flex: "0 1 auto",
    boxSizing: "border-box",
    padding: {
      base: "0 48px",
      xl: 0,
    },
    maxWidth: breakPoints.xl,
  },
});

const ConnectTitle = chakra(Text, {
  baseStyle: {
    fontSize: {
      base: "36px",
      xl: "52px",
    },
    fontWeight: 500,
    fontStyles: "normal",
    lineHeight: "60px",
    letterSpacing: "-0.02em",
  },
});

const LeftContent = chakra(Flex, {
  baseStyle: {
    justifyContent: "space-between",
    flexDirection: "column",
    color: "#fff",
    inset: 0,
    width: "100%",
    height: "100%",
    alignItems: {
      base: "flex-start",
    },
    maxWidth: "484px",
  },
});

const Description = chakra(Flex, {
  baseStyle: {
    justifyContent: "center",
    flexDirection: "column",
    gap: "24px",
  },
});

const MainTitle = chakra(Text, {
  baseStyle: {
    fontSize: {
      base: "36px",
      xl: "52px",
    },
    color: COLORS.SECONDARY,
    fontWeight: 500,
    fontStyles: "normal",
    lineHeight: "60px",
    letterSpacing: "-0.02em",
  },
});

const LeftDescription = chakra(Text, {
  baseStyle: {
    fontSize: "18px",
    fontWeight: 500,
    fontStyles: "normal",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
  },
});

const ButtonWrapper = chakra(HStack, {
  baseStyle: {
    padding: "12px 16px",
    borderRadius: "24px",
    gap: "24px",
    background: "rgb(27, 27, 27)",

    transitionDuration: "125ms",
    cursor: "pointer",
    width: "fit-content",
  },
});

const LernMoreButton = chakra(Flex, {
  baseStyle: {
    color: COLORS.SECONDARY,
    fontSize: "20px",
    fontWeight: 500,
    fontStyles: "normal",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
    cursor: "pointer",
    backgroundColor: "transparent",
    _hover: {
      textDecoration: "none",
      brightness: "0.9",
      color: COLORS.PRIMARY,
    },
  },
});

const RightWrapper = chakra(Grid, {
  baseStyle: {
    width: "100%",
    height: "100%",
    color: COLORS.PRIMARY,
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "16px",
    boxSizing: "border-box",
    wordBreak: "break-word",
    overflow: "hidden",
  },
});

const RightContent = chakra(GridItem, {
  baseStyle: {
    width: {
      base: "100%",
    },
    height: "100%",
    background: "rgb(27, 27, 27)",
    borderRadius: "20px",
    padding: "32px",
    maxHeight: "230px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundImage:
      "radial-gradient(rgba(155, 155, 155, 0.25) 0.5px, transparent 0px);",
    backgroundSize: "12px 12px",
    backgroundPosition: "-8.5px -8.5px",
  },
});

const RightTitle = chakra(Text, {
  baseStyle: {
    fontSize: { base: "18px", xl: "24px" },
    fontWeight: 500,
    fontStyles: "normal",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
  },
});

const RightValue = chakra(Text, {
  baseStyle: {
    fontSize: {
      base: "32px",
      xl: "52px",
    },
    fontWeight: 500,
    color: COLORS.SECONDARY,
    fontStyles: "normal",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
  },
});

const BottomConnectWrapper = chakra(Grid, {
  baseStyle: {
    width: "100%",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    gridTemplateColumns: {
      base: "repeat(1, 1fr)",
      md: "repeat(2, 1fr)",
      xl: "repeat(3, 1fr)",
    },
    gridTemplateRows: "repeat(3, 1fr)",
  },
});

const ConnnectItem = chakra(GridItem, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    borderRadius: "20px",
    padding: "32px 28px",
    overflow: "hidden",
    textDecoration: "none",
    height: "250px",
    maxHeight: "250px",
  },
});

const ButtonTitleConnect = chakra(Flex, {
  baseStyle: {
    fontSize: "20px",
    fontWeight: 500,
    fontStyles: "normal",
    lineHeight: "24px",
    letterSpacing: "-0.01em",
    bg: "red",
    padding: "12px 16px",
    borderRadius: "24px",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    gap: "8px",
    cursor: "pointer",
    userSelect: "none",
    boxSizing: "border-box",
    backgroundColor: "rgb(19, 19, 19)",
  },
});

const DescriptionConnect = chakra(Text, {
  baseStyle: {
    fontWeight: 500,
    fontStyles: "normal",
    letterSpacing: "-0.02em",
    lineHeight: "32px",
    color: "rgb(255, 77, 0)",
    boxSizing: "border-box",
    fontSize: "24px",
  },
});

export {
  BottomConnectWrapper,
  DescriptionConnect,
  ButtonTitleConnect,
  RightValue,
  ConnnectItem,
  RightTitle,
  RightContent,
  RightWrapper,
  ButtonWrapper,
  LernMoreButton,
  LeftDescription,
  MainTitle,
  LeftContent,
  ContentStyle,
  TrustByMillionsWrapper,
  ContentWrapper,
  ConnectTitle,
  ConnectWrapper,
  Description,
};
