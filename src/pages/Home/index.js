import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "grommet";
import StockBox from "./components/StockBox";

const Home = () => {
  const [gainers, setGainers] = useState([]);
  const [losers, setLosers] = useState([]);
  const [mostBought, setMostBought] = useState([]);

  useEffect(() => {

    fetch(`${process.env.PUBLIC_URL}/jsons/most_bought.json`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => response.json())
      .then((data) => setMostBought(data));

    fetch(`${process.env.PUBLIC_URL}/jsons/top_gainers.json`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => response.json())
      .then((data) => setGainers(data));

    fetch(`${process.env.PUBLIC_URL}/jsons/top_losers.json`,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
      .then((response) => response.json())
      .then((data) => setLosers(data));

  }, [])
  
  return (
    <Box direction="row">
      <Box basis="70%">
        {/* <Heading level="3">Most Bought</Heading>
        <Box direction="row" gap="medium" pad="medium">
          {mostBought.map((stock) => 
            <StockBox
              code={stock.code}
              name={stock.name}
              price={stock.price}
              offset={stock.offset}
            />
          )}
        </Box> */}

        <Heading level="3">Top Gainers</Heading>
        <Box direction="row" gap="medium" pad="medium">
          {gainers.map((stock) => 
            <StockBox
              code={stock.code}
              name={stock.name}
              price={stock.price}
              offset={stock.offset}
            />
          )}
        </Box>

        <Heading level="3">Top Losers</Heading>
        <Box direction="row" gap="medium" pad="medium">
          {losers.map((stock) => 
            <StockBox
              code={stock.code}
              name={stock.name}
              price={stock.price}
              offset={stock.offset}
            />
          )}
        </Box>
      </Box>
      <Box basis="30%" pad="large">
        <Heading level="3">Your Investment</Heading>
        <Box pad="medium" border={{ color: 'lightGray', size: 'small' }} round="xsmall" fill="horizontal">
          <Box direction="row" justify="between">
            <Box>
              <Heading level="5"  margin="none" color="green">+ $11,375</Heading>
            </Box>
            <Box>
              <Heading level="5"  margin="none">$68,142</Heading>
            </Box>
          </Box>
          <Box direction="row" justify="between">
            <Text color="gray" size="small">Total Returns</Text>
            <Text color="gray" size="small">Current Value</Text>
          </Box>
        </Box>
      </Box>
    </Box>
)};

export default Home;
