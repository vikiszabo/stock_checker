import * as React from "react";
import {Button, Container, Content, Header, Left, Right, Spinner} from "native-base";
import styles from "./DetailsScreen.styles";
import StockTable from "../../components/StockTable";
import SvgIcon from "../../../assets/images/back.svgx";
import {memo, useEffect, useState} from "react";
import axios from "axios";
import {BASE_URL, token} from "../../constants";
import StockLineChart from "../../components/StockLineChart";

export interface Props {
    navigation: any;
    symbol: object
}

export interface State {
    stock: object;
    historicalData: [];
}

const DetailsScreen = (props: Props, state: State) => {
    const [stock, setStock] = useState({});
    const [historicalData, setHistoricalData] = useState([]);

    const [yRange, setYRange] = useState<number[]>([0,]);
    const date: any = new Date();
    const currentDate= Math.floor(date / 1000);
    date.setFullYear( date.getFullYear() - 1 );
    const oneYearBeforeDate = Math.floor(date / 1000);



    const symbol = props.route.params.symbol.symbol;
    const getStock = async () => {
        const stocksResponse = await axios.get(`${BASE_URL}/quote?symbol=${symbol}&token=${token}`);
        console.log('STOCK: ', stocksResponse.data);
        if(stocksResponse.data) {
            setStock(stocksResponse.data);
        }
    };

    const getHistorycalData = async () => {
        const dataResponse = await axios.get(`${BASE_URL}/stock/candle?symbol=${symbol}&resolution=1&from=${oneYearBeforeDate}&to=${currentDate}&token=${token}`);
        if (dataResponse.data.c) {
            const data = dataResponse.data.c.map((item, index) => {
                const date = new Date(dataResponse.data.t[index] * 1000);
                return {x: date, y: item};
            });
            setHistoricalData(data);
        }
    };

    useEffect(() => {
        getStock();
        getHistorycalData();
    }, []);

    const handleGoBack = () => {
        setHistoricalData([]);
        setStock({});
        props.navigation.goBack(null);
    };
    return (
        <Container style={styles.container}>
            <Header style={styles.header}>
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
