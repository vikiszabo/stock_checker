import {Content, Text} from "native-base";
import React from "react";
import {StyleSheet, View} from "react-native";

export interface Props {
    navigation: any;
    stock: object;
    symbol: object;
    style?: object;
}

const StockTable = (props: Props) => {
    return <Content padder>
        <Text style={{...styles.symbolText, ...props.style}}>{props.symbol.symbol}</Text>
        <View style={{...styles.descriptionContainerView, ...props.style}}>
            <Text style={{...styles.descriptionText, ...props.style}}>{props.symbol.description} </Text>
            <Text style={{...styles.currentValueText, ...props.style}} >

            </Text>
        </View>
    <View style={{...styles.priceTableView, ...props.style}}>
        <View>
            <Text style={{...styles.priceTitles, ...props.style}}>Open</Text>
            <Text style={{...styles.prices, ...props.style}}></Text>
        </View>
        <View>
            <Text style={{...styles.priceTitles, ...props.style}}> High</Text>
            <Text style={{...styles.prices, ...props.style}}></Text>
        </View>
        <View>
            <Text style={{...styles.priceTitles, ...props.style}}>Low</Text>
            <Text style={{...styles.prices, ...props.style}}></Text>
        </View>
    </View>
    </Content>
};

const styles = StyleSheet.create({
    symbolText: {
        marginRight: 4,
        padding: 5,
        fontFamily: "AvenirNextLTPro-Regular",
        fontSize: 15,
        color: "#FFF"
    },
    descriptionContainerView: {
        margin: 4
    },
    descriptionText: {
        padding: 5,
        fontFamily: "AvenirNextLTPro-Bold",
        fontSize: 28,
        color: "#FFF"
    },
    currentValueText: {
        padding: 5,
        fontFamily: "AvenirNextLTPro-Bold",
        fontSize: 28,
        color: "#FFF"
    },
    priceTableView: {
        margin: 4,
        marginRight: 30,
        padding: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    priceTitleContainerView: {
        marginBottom: 2,
        padding: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    priceContainerView: {
        padding: 5,
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between"
    },

    priceTitles: {
        marginLeft: 4,
        padding: 5,
        fontFamily: "AvenirNextLTPro-Regular",
        fontSize: 17,
        color: "#FFF"
    },

    prices: {
        margin: 4,
        padding: 5,
        fontFamily: "AvenirNextLTPro-Bold",
        fontSize: 17,
        color: "#FFF"
    }
});

export default StockTable;
