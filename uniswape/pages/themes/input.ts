import {
  PartsStyleInterpolation,
  createMultiStyleConfigHelpers,
  defineStyleConfig,
} from "@chakra-ui/react";
import { inputAnatomy } from "@chakra-ui/anatomy";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = defineStyleConfig({
  baseStyle: {
    fontSize: "14px",
    fontWeight: "500",
    textColor: "#434343",
    lineHeight: "normal",
    _placeholder: {
      color: "#727272",
    },
  },
}) as PartsStyleInterpolation<{
  keys: ("group" | "addon" | "field" | "element")[];
}>;

const inputTheme = defineMultiStyleConfig({
  baseStyle,
  variants: {
    outline: {
      field: {
        _focusVisible: {
          boxShadow: "none",
          borderColor: "primary",
        },
        _invalid: {
          borderColor: "red",
          boxShadow: "none",
        },
      },
    },
  },
});

export { inputTheme };
