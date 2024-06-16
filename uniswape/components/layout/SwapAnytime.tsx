import {
  MainTitle,
  Wrapper,
  WrapperSwap,
  BottomBlock,
  SellBuyItem,
  ConnectWalletButton,
  ButtonArrowMiddle,
  Description,
  CoinWrapper,
  CoinValue,
  SellBuyValue,
  CoinGrid,
  DropBoxCoin,
  SellBuyWrapper,
} from "@/styles/layout/SwapAnytime";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { HOT_CHAIN_MARKETS } from "@/pages/api/PublicAPI";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ICoin } from "../utils/interface";
import { EthIcon } from "../assets/icons";
import { DropdownIcon } from "@/styles/layout/Header";

const SwapAnytime = () => {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const hoverVariants = {
    animate: {
      scale: 1.1,
      rotate: 30,
    },
  };

  const upAnimation = {
    y: ["0%", "10%", "0%"],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  };

  const downAnimation = {
    y: ["0%", "-10%", "0%"],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  };

  const fetchCoins = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(HOT_CHAIN_MARKETS, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 30,
          page: 1,
          sparkline: true,
        },
      });
      setCoins(response.data);
    } catch (error) {
      console.error("Error fetching coins:", error);
    } finally {
      setIsLoading(false);
    }
  };

  function generateCoinProperties() {
    const top = Math.random() * 90 + "%";
    const left = Math.random() * 90 + "%";
    const animation = Math.random() > 0.5 ? upAnimation : downAnimation;
    return { top, left, animation };
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
      <Wrapper>
        <WrapperSwap>
          <MainTitle>Swap anytime,</MainTitle>
          <MainTitle>anywhere.</MainTitle>
          <BottomBlock>
            <SellBuyItem>
              Sell
              <SellBuyWrapper>
                <SellBuyValue>0</SellBuyValue>
                <DropBoxCoin>
                  <EthIcon style={{ width: "24px", height: "24px" }} />
                  ETH
                  <ArrowDownIcon />
                </DropBoxCoin>
              </SellBuyWrapper>
            </SellBuyItem>
            <ButtonArrowMiddle>
              <ArrowDownIcon />
            </ButtonArrowMiddle>
            <SellBuyItem>
              Buy
              <SellBuyWrapper>
                <SellBuyValue>0</SellBuyValue>
                <DropBoxCoin>
                  <EthIcon style={{ width: "24px", height: "24px" }} />
                  ETH
                  <ArrowDownIcon />
                </DropBoxCoin>
              </SellBuyWrapper>
            </SellBuyItem>
            <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
          </BottomBlock>
          {isLoading ? (
            <Box>Loading...</Box>
          ) : (
            <CoinGrid>
              {coins.map((coin) => {
                const { top, left, animation } = generateCoinProperties();
                return (
                  <CoinWrapper style={{ top, left }}>
                    <motion.div
                      key={coin.id}
                      variants={hoverVariants}
                      whileHover={{
                        scale: 1.2,
                        rotate: 50,
                      }}
                      animate={animation}
                    >
                      <Image
                        src={coin.image}
                        alt={coin.symbol}
                        width={100}
                        height={100}
                        style={{ borderRadius: "50%" }}
                      />
                    </motion.div>
                    <CoinValue>
                      <p>{coin.symbol}</p>
                      <p
                        style={{
                          color:
                            coin.price_change_percentage_24h > 0
                              ? "#40b66b"
                              : "#f44336",
                        }}
                      >
                        {coin.price_change_percentage_24h}%
                      </p>
                    </CoinValue>
                  </CoinWrapper>
                );
              })}
            </CoinGrid>
          )}
          <Description>
            The largest onchain marketplace. Buy and sell crypto on Ethereum and
            7+ other chains.{" "}
          </Description>
        </WrapperSwap>
      </Wrapper>
    </>
  );
};

export default SwapAnytime;
