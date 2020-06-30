import React, {memo} from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "native-base";

interface ErrorMessageProps {
    errorMsg: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = props => {
    return  <View style={styles.errorView}>
        <Text style={styles.errorText}>{props.errorMsg}</Text>
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

export default memo(ErrorMessage);
