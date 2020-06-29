import React, { memo, useEffect, useState } from "react";
import { Button, Container, Content, Header, Left, Right, Spinner } from "native-base";
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import axios from "axios";

import StockTable from "../../components/StockTable";
import { BASE_URL, token } from "../../constants";
import StockLineChart from "../../components/StockLineChart";
import { AppStackParamList } from "../../navigation/AppNavigator";

import SvgIcon from "../../../assets/images/back.svgx";

import styles from "./DetailsScreen.styles";
import { StatusBar } from "react-native";

type DetailsScreenNavigationProp = StackNavigationProp<
    AppStackParamList,
    'DetailScreen'
    >;

type DetailsScreenRouteProp = RouteProp<AppStackParamList, 'DetailScreen'>;

export interface Props {
    navigation: DetailsScreenNavigationProp;
    route: DetailsScreenRouteProp;
    symbol: ISymbol
}

export interface State {
    stock: IStock;
    historicalData: number[];
}

type StockResponse = {data: IStock}

const DetailsScreen = (props: Props, state: State) => {
    const [stock, setStock] = useState<object>({});
    const [historicalData, setHistoricalData] = useState<number[]>([]);

    const date: Date = new Date();
    const currentDate: number = Math.floor(date / 1000);
    date.setFullYear( date.getFullYear() - 1 );
    const oneYearBeforeDate: number = Math.floor(date / 1000);

    const symbol: string = props.route.params.symbol.symbol;
    const stockURL: string = `${BASE_URL}/quote?symbol=${symbol}&token=${token}`;
    const historicalDataURL: string = `${BASE_URL}/stock/candle?symbol=${symbol}&resolution=D&from=${oneYearBeforeDate}&to=${currentDate}&token=${token}`;

    useEffect(() => {
        getStock();
        getHistorycalData();
    }, []);

    const getStock = async () => {
         await axios.get<StockResponse>(stockURL)
            .then( response => {
                  const stockResponse = response.data;
                  setStock(stockResponse);
                }
            )
            .catch(err => {
                console.log(err)
            })
        };

    const getHistorycalData = async () => {
        await axios.get(historicalDataURL)
            .then(response => {
                const dataResponse = response.data;
                const data = dataResponse.c.map((item, index) => {
                    const date = new Date(dataResponse.t[index] * 1000);
                    return {x: date, y: item};
                });
                setHistoricalData(data);
            })
            .catch(err => {
                console.log(err)
            });
    };

    const handleGoBack = () => {
        setHistoricalData([]);
        setStock({});
        props.navigation.goBack();
    };
    return (
        <Container style={styles.container}>
            <Header style={styles.header}>
                <StatusBar barStyle="light-content" />
                <Left>
                    <Button transparent onPress={() => handleGoBack()}>
                        <SvgIcon />
                    </Button>
                </Left>
                <Right />
            </Header>
            <Content padder>
                <StockTable
                    stock={stock} symbol={props.route.params.symbol} />
                { historicalData.length > 0
                    ? <StockLineChart stock={stock}
                                    symbol={props.route.params.symbol}
                                    historicalData={historicalData} />
                    :  <Spinner color="#E9563E" />
                }
            </Content>
        </Container>
    );
};

export default memo(DetailsScreen);
