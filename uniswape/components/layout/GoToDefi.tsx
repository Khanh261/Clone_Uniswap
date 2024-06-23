import { MainTitle } from "@/styles/layout/Content";
import {
  BottomBlock,
  ButtonTitleDefi,
  CardItem,
  ChainName,
  HotChainItem,
  SymbolName,
  Title,
  ValueUSD,
  Wrapper,
  WrapperHotChain,
} from "@/styles/layout/GotoDefi";
import {
  DeveloperIcon,
  EthIcon,
  LidoDAOIcon,
  LiquidityIcon,
  USDCIcon,
  UniswapIcon,
  WalletIcon,
  WebAppIcon,
} from "../assets/icons";
import { useEffect, useState } from "react";
import { NEXT_HOT_CHAIN } from "@/pages/api/PublicAPI";
import { ChainSymbol, IDefiDataProps, IHotChain } from "../utils/interface";

const chainIcons: Record<ChainSymbol, JSX.Element> = {
  ETH: <EthIcon />,
  USDC: <USDCIcon />,
  UNI: <UniswapIcon />,
  LDO: <LidoDAOIcon />,
};

export const DEFI_DATA: IDefiDataProps[] = [
  {
    icon: <WebAppIcon />,
    title: "Web app",
    desciption:
      "Swapping made simple. Access thousands of tokens on 8+ chains.",
    content: "",
    color: "#2abdff",
    bgColor: "#18181f",
  },
  {
    icon: <WalletIcon />,
    title: "Uniswap wallet",
    desciption: "The wallet built for swapping. Available on iOS and Android.",
    content: "",
    color: "#fc72ff",
    bgColor: "#312031",
  },
  {
    icon: <DeveloperIcon />,
    title: "Developer docs",
    desciption: "Build the next generation of open applications and tools.",
    content: "",
    color: "#00c3a0",
    bgColor: "#161f1e",
  },
  {
    icon: <LiquidityIcon />,
    title: "Liquidity",
    desciption:
      "Provide liquidity to pools on the Uniswap Protocol and earn fees on swaps.",
    content: "",
    color: "#9e6eff",
    bgColor: "#1d1923",
  },
];

const GoToDeFi = () => {
  const [loading, setLoading] = useState(false);
  const [hotChain, setHotChain] = useState<IHotChain[]>([]);

  const fetchHotChain = async () => {
    setLoading(true);
    try {
      const res = await fetch(NEXT_HOT_CHAIN);
      const data = await res.json();
      setHotChain([
        {
          name: "Ethereum",
          symbol: "ETH",
          usd: data.ethereum.usd,
          usd_24h_change: data.ethereum.usd_24h_change,
        },
        {
          name: "USD Coin",
          symbol: "USDC",
          usd: data["usd-coin"].usd,
          usd_24h_change: data["usd-coin"].usd_24h_change,
        },
        {
          name: "Uniswap",
          symbol: "UNI",
          usd: data.uniswap.usd,
          usd_24h_change: data.uniswap.usd_24h_change,
        },
        {
          name: "Lido DAO",
          symbol: "LDO",
          usd: data["lido-dao"].usd,
          usd_24h_change: data["lido-dao"].usd_24h_change,
        },
      ]);

      console.log("Hot chains:", hotChain);
    } catch (error) {
      console.error("Error fetching hot chains:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotChain();
  }, []);
  return (
    <Wrapper>
      <MainTitle>Go direct to DeFi</MainTitle>
      <BottomBlock>
        {DEFI_DATA.map((data, index) => (
          <CardItem
            key={index}
            style={{
              background: data.bgColor,
              color: data.color,
            }}
          >
            <ButtonTitleDefi
              style={{
                color: data.color,
              }}
            >
              {data.icon}
              {data.title}
            </ButtonTitleDefi>
            <Title>{data.desciption}</Title>
            {data.content}
            <WrapperHotChain></WrapperHotChain>
            {loading ? (
              <p>Loading...</p>
            ) : (
              hotChain.map((chain, index) => (
                <WrapperHotChain key={index}>
                  <HotChainItem>
                    {chainIcons[chain.symbol]}
                    <ChainName>{chain.name}</ChainName>
                    <SymbolName>{chain.symbol}</SymbolName>
                    <ValueUSD> ${chain.usd.toFixed(2)}</ValueUSD>
                    <ChainName
                      style={{
                        color: chain.usd_24h_change > 0 ? "#40b66b" : "#ff5f52",
                      }}
                    >
                      {chain.usd_24h_change.toFixed(2)}%
                    </ChainName>
                  </HotChainItem>
                </WrapperHotChain>
              ))
            )}
          </CardItem>
        ))}
      </BottomBlock>
    </Wrapper>
  );
};
export default GoToDeFi;
