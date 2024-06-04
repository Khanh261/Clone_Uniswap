import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {
  extendBaseTheme,
  theme as chakraTheme,
  ChakraProvider,
  Box,
  Progress,
} from "@chakra-ui/react";
import Fonts from "@/components/assets";
import Head from "next/head";
import { TITLE } from "@/constans/meta";
import { ReactElement, ReactNode, useState } from "react";
import { NextPage } from "next";
import theme from "./themes/theme";
import { useRouter } from "next/router";
import Layout from "@/components/layout";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const App = ({ Component, pageProps, ...props }: AppPropsWithLayout) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ChakraProvider
      theme={theme}
      toastOptions={{
        defaultOptions: {
          position: "top-right",
          isClosable: true,
          duration: 3000,
        },
      }}
    >
      <Fonts />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>{TITLE}</title>
      </Head>
      <Box height={"5px"} bg={"#fff"} position={"relative"} zIndex={99999999}>
        {isLoading && (
          //color scheme of Uniswap
          <Progress isIndeterminate height={"5px"} colorScheme="green" />
        )}
      </Box>
      <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
    </ChakraProvider>
  );
};

export default App;
