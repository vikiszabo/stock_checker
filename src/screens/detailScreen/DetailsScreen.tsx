import * as React from "react";
import {Button, Container, Header, Left, Right} from "native-base";
import styles from "./DetailsScreen.styles";
import StockTable from "../../components/StockTable";
import SvgIcon from "../../../assets/images/back.svgx";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";
import {useEffect, useState} from "react";
import axios from "axios";
import {token} from "../../constants";


export interface Props {
    navigation: any;
    symbol: object
}

export interface State {
    stocks: object;
    historicalData: object;
}
const StockData: IStock = {
  symbol: "APPL",
  description: "Apple Inc",
  currentValue: 276.10,
  openPrice: 273.6,
  highPrice: 273.6,
  lowPrice: 273.6
};


const DetailsScreen = (props: Props, state: State) => {
    const [stock, setStock] = useState();
    const [historicalData, setHistoricalData] = useState([]);


    useEffect(() => {
        const symbol = props.route.params.symbol.symbol;
        const getStock = async () => {
            const stocksResponse = await axios.get(`https://finnhub.io/api/v1/stock/candle?symbol=${symbol}&resolution=1&from=1572651390&to=1572910590&token=${token}`);
            setStock(stocksResponse.data);
            if (stocksResponse.data.c) {
                const data = stocksResponse.data.c.map((item, index) => {
                    return {x: index, y: item};
                    // return {x: data.data.t[index], y: item};
                });
                setHistoricalData(data);
            }
        //    console.log(historicalData);
        };
        getStock();
        console.log(stock);
    }, []);

  return (
      <Container style={styles.container}>
        <Header style={styles.header}>
          <Left>
            <Button transparent onPress={() => props.navigation.goBack()}>
              <SvgIcon />
            </Button>
          </Left>
          <Right />
        </Header>
        <StockTable stock={stock} symbol={props.route.params.symbol} />

          <VictoryChart
              theme={VictoryTheme.material}
              height={290}
          >
              <VictoryLine
                  style={{
                      data: { stroke: "#E9563E" },
                      parent: { border: "1px solid #ccc"}
                  }}
                  interpolation="natural"
                  data={historicalData}
              />
          </VictoryChart>
      </Container>
  );
};

export default DetailsScreen;
