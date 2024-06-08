import {
  ButtonDropdown,
  ConnectButton,
  CustomInputGroup,
  CustomText,
  HeaderContent,
  HeaderWrapper,
  LeftContentHeader,
  MiddleContentHeader,
  RightContentHeader,
  SearchIcon,
} from "@/styles/layout/Header";
import React from "react";
import Image from "next/image";
import DesktopNav from "./NavItem";
import { Box, InputLeftElement, InputRightElement } from "@chakra-ui/react";

const DesktopHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LeftContentHeader>
          <Box>
            <Image
              src="/images/uniswap_logo.png"
              alt="logo"
              width={48}
              height={48}
              quality={100}
              style={{ marginRight: "1rem" }}
            />
          </Box>
          <DesktopNav />
        </LeftContentHeader>
        <CustomInputGroup>
          <InputLeftElement>
            <SearchIcon src="/images/search.png" alt="logo" />
          </InputLeftElement>
          <MiddleContentHeader
            placeContent={"Search Token and NFT collections"}
          />
          <InputRightElement>
            <Image
              src="/images/slash.png"
              alt="search"
              width={24}
              height={24}
              quality={100}
            />
          </InputRightElement>
        </CustomInputGroup>
        <RightContentHeader>
          <ButtonDropdown>
            <Image
              src="/images/ethereum.png"
              alt="eth"
              width={20}
              height={20}
              quality={100}
            />
            <Image
              src="/images/down-chevron.png"
              alt="eth"
              width={20}
              height={20}
              quality={100}
            />
          </ButtonDropdown>
          <ButtonDropdown>
            <CustomText>Get the app</CustomText>
            <Image
              src="/images/apple.png"
              alt="eth"
              width={20}
              height={20}
              quality={100}
            />
            <Image
              src="/images/google-play.png"
              alt="eth"
              width={20}
              height={20}
              quality={100}
            />
          </ButtonDropdown>{" "}
          <ConnectButton>Connect</ConnectButton>
        </RightContentHeader>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default DesktopHeader;
