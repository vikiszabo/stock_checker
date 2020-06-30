import React, {memo} from "react";
import {StyleSheet, View} from "react-native";
import {Text} from "native-base";
import colors from "../constants/colors";

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
        backgroundColor: colors.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    errorText: {
        color: "#FFF",
        fontFamily: "AvenirNextLTPro-Regular",
        fontSize: 15
    },
});

export default memo(ErrorMessage);
