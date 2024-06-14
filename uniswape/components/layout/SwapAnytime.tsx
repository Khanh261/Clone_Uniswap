import {
  MainTitle,
  Wrapper,
  WrapperSwap,
  BottomBlock,
  SellBuyItem,
  ConnectWalletButton,
  ButtonArrowMiddle,
  Description,
} from "@/styles/layout/SwapAnytime";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export interface ICoin {
  id: string;
  symbol: string;
  image: string;
  price_change_percentage_24h: number;
}

const SwapAnytime = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchCoins = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets",
        {
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: 10,
            page: 1,
            sparkline: true,
          },
        }
      );
      console.log("response", response.data);
      setCoins(response.data);
      console.log("coins", coins);
    } catch (error) {
      console.error("Error fetching coins:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
      <Wrapper>
        <WrapperSwap>
          <MainTitle>Swap anytime,</MainTitle>
          <MainTitle>anywhere.</MainTitle>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <div>
              {coins.map((coin) => (
                <SellBuyItem key={coin.id}>
                  <img src={coin.image} alt={coin.id} />
                  <p>{coin.id}</p>
                  <p style={{ color: "red" }}>
                    {coin.price_change_percentage_24h}
                  </p>
                </SellBuyItem>
              ))}
            </div>
          )}
          <BottomBlock>
            <SellBuyItem>Sell</SellBuyItem>
            <ButtonArrowMiddle>
              <ArrowDownIcon />
            </ButtonArrowMiddle>
            <SellBuyItem>Buy</SellBuyItem>
            <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
          </BottomBlock>
          <Description>
            The largest onchain marketplace. Buy and sell crypto on Ethereum and
            7+ other chains.
          </Description>
        </WrapperSwap>
      </Wrapper>
    </>
  );
};

export default SwapAnytime;
