import { HOT_CHAIN_MARKETS } from "@/pages/api/PublicAPI";
import {
  CustomTableContainer,
  CustomTableHeader,
  Wrapper,
} from "@/styles/explorer/transaction";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { ICoin } from "../utils/interface";

const Transaction = () => {
  const [chains, setChains] = useState<ICoin[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCoins = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(HOT_CHAIN_MARKETS, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: true,
        },
      });
      setChains(response.data);
      console.log("Coins:", response.data);
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
    <Wrapper>
      <CustomTableContainer>
        <Table>
          <CustomTableHeader>
            <Tr>
              {/* update */}
              <Th>#</Th>
              <Th>Token name</Th>
              <Th>1 hour</Th>
              <Th>1 day</Th>
              <Th>FDV</Th>
              <Th>
                <ArrowDownIcon /> Volumn
              </Th>
            </Tr>
          </CustomTableHeader>
          <Tbody>
            {chains.map((chain, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{chain.name}</Td>
                <Td>{chain.price_change_percentage_1h_in_currency}</Td>
                <Td>{chain.price_change_percentage_24h}</Td>
                <Td>{chain.market_cap}</Td>
                <Td>{chain.total_volume}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </CustomTableContainer>
    </Wrapper>
  );
};

export default Transaction;
