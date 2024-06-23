import { COLORS } from "@/constans/css";
import { breakPoints } from "@/pages/themes/theme";
import { Flex, TableContainer, Thead, chakra } from "@chakra-ui/react";

const Wrapper = chakra(Flex, {
  baseStyle: {
    margin: "0px auto",
    width: breakPoints.xl,
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    padding: "0px 24px",
  },
});

const CustomTableContainer = chakra(TableContainer, {
  baseStyle: {
    width: "100%",
    color: COLORS.SECONDARY,
  },
});

const CustomTableHeader = chakra(Thead, {
  baseStyle: {
    borderBottom: "1px solid #FFFFFF12)",
    borderTopRightRadius: "20px",
    borderTopLeftRadius: "20px",
    overflow: "auto",
    width: "unset",
    minHeight: "52px",
    scrollbarWidth: "none",
    overscrollBehavior: "none",
    background: "#1b1b1b",
  },
});
export { Wrapper, CustomTableContainer, CustomTableHeader };
