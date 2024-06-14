import { COLORS } from "@/constans/css";
import { breakPoints } from "@/pages/themes/theme";
import { Box, Flex, Text, Grid, GridItem, chakra } from "@chakra-ui/react";

const Wrapper = chakra(Box, {
  baseStyle: {
    maxWidth: breakPoints.xl,
    margin: "auto",
    color: COLORS.SECONDARY,
    alignItems: "center",
    justifyContent: "flex-start",
    boxSizing: "border-box",
    padding: {
      base: "0 48px",
      xl: 0,
    },
    gap: "32px",
    width: "100%",
    inset: "auto",
  },
});

const BottomBlock = chakra(Grid, {
  baseStyle: {
    width: "100%",
    height: "100%",
    paddingTop: "32px",
    color: COLORS.PRIMARY,
    gridTemplateColumns: {
      base: "repeat(1, 1fr)",
      md: "repeat(1, 1fr)",
      xl: "repeat(2, 1fr)",
    },
    gridTemplateRows: {
      base: "repeat(1, 1fr)",
      lg: "repeat(1, 1fr)",
      xl: "repeat(2, 1fr)",
    },
    gap: "16px",
    boxSizing: "border-box",
  },
});

const Title = chakra(Text, {
  baseStyle: {
    fontSize: {
      base: "24px",
      xl: "36px",
    },
    fontWeight: 500,
    fontStyles: "normal",
    lineHeight: "44px",
    letterSpacing: "-0.01em",
    whiteSpace: "preserve-breaks pretty",
  },
});

const ButtonTitleDefi = chakra(Flex, {
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

const CardItem = chakra(GridItem, {
  baseStyle: {
    width: {
      base: "100%",
    },
    height: "auto",
    borderRadius: "20px",
    padding: "32px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});

const WrapperHotChain = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    boxSizing: "border-box",
    padding: "32px",
    gap: "6px",
  },
});

const HotChainItem = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "72px",
    maxHeight: "72px",
    overflow: "hidden",
    padding: "16px 24px 16px 16px",
    flexDirection: "row",
    alignItems: "center",
    gap: "16px",
    borderRadius: "24px",
    backgroundColor: "rgb(19, 19, 19)",
    cursor: "pointer",
    _hover: {
      transform: "scale(1.03)",
      filter: "brightness(1.3)",
      transition:
        "background-color 125ms ease-in 0s, transform 125ms ease-in 0s",
    },
  },
});

const ChainName = chakra(Text, {
  baseStyle: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "32px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: COLORS.SECONDARY,
    display: {
      base: "none",
      md: "block",
    },
  },
});

const ValueUSD = chakra(Text, {
  baseStyle: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "32px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: COLORS.SECONDARY,
  },
});

const SymbolName = chakra(Text, {
  baseStyle: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "32px",
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    color: COLORS.PRIMARY,
  },
});
export {
  Title,
  Wrapper,
  BottomBlock,
  CardItem,
  ButtonTitleDefi,
  WrapperHotChain,
  HotChainItem,
  ChainName,
  SymbolName,
  ValueUSD,
};
