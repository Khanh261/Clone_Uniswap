import React, { ReactNode } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;
