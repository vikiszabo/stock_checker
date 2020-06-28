import React from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "native-base";

const ErrorMessage = (props: any) => {
    return  <View style={styles.errorView}>
        <Text style={styles.errorText}>This is not a valid Ticker Symbol</Text>
    </View>;
};

const styles = StyleSheet.create({
    errorView: {
        position: "absolute",
        height: 80,
        width: "100%",
        backgroundColor: "#E9563E",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        color: "#FFF",
        fontFamily: "AvenirNextLTPro-Regular",
        fontSize: 17
    },
});

export default ErrorMessage;
