import { COLORS } from "@/constans/css";
import { Box, chakra, Flex, Text } from "@chakra-ui/react";

const Wrapper = chakra(Box, {
  baseStyle: {
    color: COLORS.SECONDARY,
    height: "1356px",
    maxHeight: "1356px",
    background: "#161615",
    width: "100vw",
  },
});

const WrapperSwap = chakra(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    gap: "24px",
    inset: "auto",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "480px",
    maxWidth: "85vw",
  },
});

const Description = chakra(Text, {
  baseStyle: {
    width: "100%",
    height: "auto",
    textAlign: "center",
    color: COLORS.PRIMARY,
    maxWidth: "300px",
    letterSpacing: "-0.01em",
    lineHeight: "24px",
    fontStyle: "18px",
    fontWeight: 400,
    whiteSpace: "pre-wrap",
  },
});

const ButtonArrowMiddle = chakra(Flex, {
  baseStyle: {
    borderRadius: "12px",
    height: "40px",
    width: "40px",
    position: "absolute",
    boxSizing: "border-box",
    margin: "-10px auto",
    backgroundColor: "#1B1B1B",
    padding: "10px",
    border: "4px solid #131313",
    zIndex: 2,
    left: 0,
    top: "36%",
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
    cursor: "pointer",
  },
});

const MainTitle = chakra(Text, {
  baseStyle: {
    fontSize: {
      base: "36px",
      md: "52px",
      xl: "64px",
    },
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "120%",
    whiteSpace: "pre-line",
    textAlign: "center",
    letterSpacing: "-0.02em",
    color: COLORS.SECONDARY,
  },
});

const BottomBlock = chakra(Flex, {
  baseStyle: {
    flexDirection: "column",
    boxSizing: "border-box",
    width: "100%",
    justifyContent: "center",
    overflow: "visile",
    background: "#131313",
    padding: "8px",
    borderRadius: "24px",
    position: "relative",
    gap: "5px",
    zIndex: 1,
  },
});

const SellBuyItem = chakra(Flex, {
  baseStyle: {
    backgroundColor: "rgb(27, 27, 27)",
    borderRadius: "16px",
    color: COLORS.PRIMARY,
    fontWeight: 500,
    fontSize: "14px",
    padding: "16px",
    height: "120px",
    maxHeight: "120px",
    lineHeight: "20px",
  },
});

const ConnectWalletButton = chakra(Flex, {
  baseStyle: {
    width: "100%",
    height: "100%",
    userSelect: "none",
    inset: "0px",
    borderRadius: "14px",
    backgroundColor: "#311c31",
    color: "#fc72ff",
    fontSize: "20px",
    fontWeight: 535,
    padding: "16px",
    outline: "none",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    flexWrap: "nowrap",
    _hover: {
      filter: "brightness(1.2)",
      transition: "filter 0.3s ease 0s",
    },
  },
});

export {
  Wrapper,
  WrapperSwap,
  MainTitle,
  BottomBlock,
  SellBuyItem,
  ConnectWalletButton,
  ButtonArrowMiddle,
  Description,
};
