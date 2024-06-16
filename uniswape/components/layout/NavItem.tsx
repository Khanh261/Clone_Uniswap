import { NAV_ITEMS } from "@/constans/nav-data";
import { NavItem } from "@/styles/layout/Header";
import { Stack } from "@chakra-ui/react";

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={5}>
      {NAV_ITEMS.map((navItem) => (
        <NavItem key={navItem.label}>{navItem.label}</NavItem>
      ))}
    </Stack>
  );
};

export default DesktopNav;
