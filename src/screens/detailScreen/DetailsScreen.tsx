import * as React from "react";
import {Button, Container, Header, Left, Right} from "native-base";
import styles from "./DetailsScreen.styles";
import StockTable from "../../components/StockTable";
import SvgIcon from "../../../assets/images/back.svgx";
import { VictoryLine, VictoryChart, VictoryTheme } from "victory-native";


export interface Props {
  navigation: any;
  stock: IStock;
}

export interface State {

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
        <StockTable stock={StockData}/>

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
                  data={[
                      { x: 1, y: 2 },
                      { x: 2, y: 3 },
                      { x: 3, y: 5 },
                      { x: 4, y: 4 },
                      { x: 5, y: 7 }
                  ]}
              />
          </VictoryChart>
      </Container>
  );
};

export default DetailsScreen;
