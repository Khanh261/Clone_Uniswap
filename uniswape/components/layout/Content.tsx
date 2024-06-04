import { ContentStyle } from "@/styles/layout/Content";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Content = ({ children }: Props) => {
  return <ContentStyle>{children}</ContentStyle>;
};

export default Content;
