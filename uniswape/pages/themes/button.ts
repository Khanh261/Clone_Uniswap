import { defineStyleConfig } from "@chakra-ui/react";

//button style of Uniswap
const buttonTheme = defineStyleConfig({
  baseStyle: {},
  variants: {
    solid: {
      bg: "primary",
      textColor: "white",
      borderRadius: "0.5rem", // 8px
      _active: {
        filter: "brightness(0.9)",
        bg: "primary",
      },
      _hover: {
        filter: "brightness(0.9)",
        bg: "primary",
      },
    },
    outline: {
      borderColor: "primary",
      border: "1px solid",
      textColor: "primary",
      fontWeight: "500",
      _hover: {
        bg: "none",
      },
    },
  },
});

export { buttonTheme };
