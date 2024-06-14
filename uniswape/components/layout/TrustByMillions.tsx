import {
  ButtonWrapper,
  Description,
  LeftContent,
  LernMoreButton,
  MainTitle,
  RightContent,
  RightTitle,
  RightValue,
  RightWrapper,
  TrustByMillionsWrapper,
} from "@/styles/layout/Content";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export const TRUSTEDD_BY_DATA = [
  {
    title: "All time volume",
    value: "$2.0T",
    color: "#fff",
    colorTitle: "#9b9b9b",
  },
  {
    title: "All time swappers",
    value: "16.6M",
    color: "#fff",
    colorTitle: "#9b9b9b",
  },
  {
    title: "All time LP fees",
    value: "$3.4B",
    color: "#fff",
    colorTitle: "#9b9b9b",
  },
  {
    title: "24H volume",
    value: "$10.0B",
    color: "#3fb66b",
  },
];

const TrustByMillions = () => {
  return (
    <TrustByMillionsWrapper>
      <LeftContent>
        <MainTitle>Trusted by millions</MainTitle>
        <Description>
          Uniswap products are powered by the Uniswap Protocol. The protocol is
          the largest onchain marketplace, with billions of dollars in weekly
          volume across thousands of tokens on Ethereum and 7+ additional
          chains.
          <ButtonWrapper>
            <LernMoreButton as="a">Learn more</LernMoreButton>
            <Image
              src="/images/next.png"
              alt="arrow"
              width={20}
              height={20}
              quality={100}
              style={{
                cursor: "pointer",
                background: "#fff",
                borderRadius: "50%",
              }}
            />
          </ButtonWrapper>
        </Description>
      </LeftContent>
      <RightWrapper>
        {TRUSTEDD_BY_DATA.map((data, index) => (
          <RightContent key={index}>
            <RightTitle color={data.colorTitle}>{data.title}</RightTitle>
            <RightValue color={data.color}>{data.value}</RightValue>
          </RightContent>
        ))}
      </RightWrapper>
    </TrustByMillionsWrapper>
  );
};
export default TrustByMillions;
