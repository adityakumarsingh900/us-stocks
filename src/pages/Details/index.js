import { Box, Heading, Text } from "grommet";
import { LinkPrevious } from "grommet-icons";
import { createChart } from "lightweight-charts";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const history = useHistory();
  const [stock, setStock] = useState({});

  useEffect(() => {
    fetch("/jsons/details.json",{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        drawChart(data.results);
        setStock({
          name: data.name,
          open: data.open,
          high: data.high,
          low: data.low,
          close: data.close,
        })
      });
    
  }, [id]);

  function drawChart(data) {
    const chartOptions = {
      layout: {
        textColor: "black",
        background: { type: "solid", color: "white" },
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      timeScale: {
        timeVisible: true, // This line makes the time visible
      },
    };
    const chart = createChart(
      document.getElementById("container"),
      chartOptions
    );
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: "#26a69a",
      downColor: "#ef5350",
      borderVisible: false,
      wickUpColor: "#26a69a",
      wickDownColor: "#ef5350",
    });

    const datum = data.map((bar) => ({
        time: bar.t/1000,
        open: bar.o,
        high: bar.h,
        low: bar.l,
        close: bar.c,
      }));

    candlestickSeries.setData(datum);

    chart.timeScale().fitContent();
  }

  return (
    <Box pad="medium">
      <Box direction="row">
        <Box fill>
          <LinkPrevious color='plain' size='large' onClick={() => history.push('/home')}/>
          <Heading level={2}>{id}</Heading>
        </Box>
        <Box direction="row">
          <Text level={5}>Open <Text weight="bold" color="green">${stock.open}</Text></Text>
          <Text level={5}>High <Text weight="bold" color="green">${stock.high}</Text></Text>
          <Text level={5}>Low <Text weight="bold" color="green">${stock.low}</Text></Text>
          <Text level={5}>Close <Text weight="bold" color="green">${stock.close}</Text></Text>
        </Box>
      </Box>
      <div id="container" style={{ height: "450px" }}></div>
    </Box>
  );
}
