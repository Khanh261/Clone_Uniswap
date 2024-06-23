import { NAV_ITEMS } from "@/constans/nav-data";
import { NavItem } from "@/styles/layout/Header";
import { Stack } from "@chakra-ui/react";
import Link from "next/link";

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
        <>
          <Link href={navItem.href}>
            <NavItem key={navItem.label}>{navItem.label}</NavItem>
          </Link>
        </>
      ))}
    </Stack>
  );
};

export default DesktopNav;
