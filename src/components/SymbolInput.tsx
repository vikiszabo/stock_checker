import React from "react";
import {StyleSheet, TextInput} from "react-native";

interface SymbolInputProps {
    style?: object,
    onBlur(): void,
    onFocus(): void,
    value: string,
    onChangeText(text: string): void
}

const SymbolInput: React.FC<SymbolInputProps> = props => {
    return  <TextInput  {...props}
                        maxLength={5}
                        autoCapitalize="characters"
                        style={{...styles.input, ...props.style}}
                        placeholder="VOO"
    />;
};

const styles = StyleSheet.create({
    input: {
        height: 100,
        borderColor: "#ECECEC",
        borderWidth: 1,
        borderRadius: 5,
        margin: 20,
        textAlign: "center",
        fontFamily: "AvenirNextLTPro-Regular",
        fontSize: 28,
    },
});

export default SymbolInput;
