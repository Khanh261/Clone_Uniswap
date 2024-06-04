import { Inter } from "next/font/google";
import { Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <Box bg={"#343434"}>Hello World</Box>;
}
