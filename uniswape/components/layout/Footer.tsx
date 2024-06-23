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
import { DiscordIcon, GithubIcon, TwitterIcon } from "../assets/icons";
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
                <GithubIcon />
                <TwitterIcon />
                <DiscordIcon />
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
