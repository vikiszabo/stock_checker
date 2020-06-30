import {Text} from "native-base";
import React, {memo} from "react";
import {StyleSheet, View} from "react-native";

export interface StockTableProps {
    stock: IStock;
    symbol: ISymbol;
    style?: object;
}

const StockTable: React.FC<StockTableProps> = props => {
    return <View style={styles.container}>
        <Text style={{...styles.symbolText, ...props.style}}>{props.symbol.symbol}</Text>
        <View style={{...styles.descriptionContainerView, ...props.style}}>
            <Text style={{...styles.descriptionText, ...props.style}}>{props.symbol.description} </Text>
            <Text style={{...styles.currentValueText, ...props.style}} >
                ${props.stock.c}
            </Text>
        </View>
    <View style={{...styles.priceTableView, ...props.style}}>
        <View>
            <Text style={{...styles.priceTitles, ...props.style}}>Open</Text>
            <Text style={{...styles.prices, ...props.style}}>{props.stock.o}</Text>
        </View>
        <View>
            <Text style={{...styles.priceTitles, ...props.style}}> High</Text>
            <Text style={{...styles.prices, ...props.style}}>{props.stock.h}</Text>
        </View>
        <View>
            <Text style={{...styles.priceTitles, ...props.style}}>Low</Text>
            <Text style={{...styles.prices, ...props.style}}>{props.stock.l}</Text>
        </View>
    </View>
        </View>
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 4
    },
    symbolText: {
        marginLeft: 8,
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
        marginRight: 30,
        paddingVertical: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
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

export default memo(StockTable);
