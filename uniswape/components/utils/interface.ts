import { ReactNode } from "react";
import { EthIcon, LidoDAOIcon, USDCIcon, UniswapIcon } from "../assets/icons";
export type ChainSymbol = "ETH" | "USDC" | "UNI" | "LDO";

export interface IDefiDataProps {
  icon: ReactNode;
  title: string;
  desciption: string;
  color: string;
  bgColor: string;
  content: ReactNode;
}

export interface IHotChain {
  name: string;
  symbol: ChainSymbol;
  usd: number;
  usd_24h_change: number;
}
