import {
  Column,
  CustomLogo,
  FooterContent,
  FooterWrapper,
  Information,
  LeftColumn,
  LeftContent,
  LinkStyle,
  MainTitle,
  RightContent,
} from "@/styles/layout/Footer";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import NextLink from "next/link";
const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterContent>
          <LeftContent>
            <LeftColumn>
              <Text>@ 2024</Text>
              <Text>Uniswap Labs</Text>
              <CustomLogo>
                <Image
                  src="/images/github.png"
                  alt="logo"
                  width={40}
                  height={40}
                  quality={100}
                />
                <Image
                  src="/images/twitter.png"
                  alt="logo"
                  width={40}
                  height={40}
                  quality={100}
                />
                <Image
                  src="/images/discord.png"
                  alt="logo"
                  width={40}
                  height={40}
                  quality={100}
                />
              </CustomLogo>
            </LeftColumn>
          </LeftContent>
          <RightContent>
            <Information>
              <Column>
                <ListHeader>App</ListHeader>
                <LinkStyle as={NextLink} href={"/"}>
                  Swap
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  Tokens
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  NFTs
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  Pool
                </LinkStyle>{" "}
              </Column>

              <Column>
                <ListHeader>Protocol</ListHeader>
                <LinkStyle as={NextLink} href={"/"}>
                  Governance
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  Developers
                </LinkStyle>{" "}
              </Column>

              <Column>
                <ListHeader>Company</ListHeader>
                <LinkStyle as={NextLink} href={"/"}>
                  Careers
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  Blog
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  Brand Asserts
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  Terms & Privacy
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  Trademark Policy
                </LinkStyle>{" "}
              </Column>

              <Column>
                <ListHeader>Need help?</ListHeader>
                <LinkStyle as={NextLink} href={"/"}>
                  Contact us
                </LinkStyle>{" "}
                <LinkStyle as={NextLink} href={"/"}>
                  Help Center
                </LinkStyle>{" "}
              </Column>
            </Information>
          </RightContent>
        </FooterContent>
      </FooterWrapper>
    </>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return <MainTitle>{children}</MainTitle>;
};

export default Footer;
