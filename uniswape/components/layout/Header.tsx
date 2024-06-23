import {
  ButtonDropdown,
  ConnectButton,
  CustomInputGroup,
  CustomText,
  DropdownIcon,
  HeaderContent,
  HeaderWrapper,
  LeftContentHeader,
  MiddleContentHeader,
  RightContentHeader,
} from "@/styles/layout/Header";
import React from "react";
import Image from "next/image";
import DesktopNav from "./NavItem";
import { Box, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import {
  AppleIcon,
  EthIcon,
  GooglePlayIcon,
  UniswapGlobalIcon,
} from "../assets/icons";
import { ArrowDownIcon, SearchIcon } from "@chakra-ui/icons";

const DesktopHeader = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <LeftContentHeader>
          <Box>
            <UniswapGlobalIcon />
          </Box>
          <DesktopNav />
        </LeftContentHeader>
        <CustomInputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <MiddleContentHeader
            placeholder="Search Token and NFT collections"
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
            <EthIcon style={{ width: "20px", height: "20px" }} />
            <ArrowDownIcon style={{ width: "20px", height: "20px" }} />
          </ButtonDropdown>
          <ButtonDropdown>
            <CustomText>Get the app</CustomText>
            <AppleIcon style={{ width: "20px", height: "20px" }} />
            <GooglePlayIcon style={{ width: "20px", height: "20px" }} />
          </ButtonDropdown>{" "}
          <ConnectButton>Connect</ConnectButton>
        </RightContentHeader>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default DesktopHeader;
