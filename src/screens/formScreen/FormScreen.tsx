import * as React from "react";
import {memo, useState, useEffect} from "react";
import {Container, Form, Text} from "native-base";
import styles from "./FormScreen.styles";
import {KeyboardAvoidingView, ScrollView, View} from "react-native";
import SymbolInput from "../../components/SymbolInput";
import SymbolButton from "../../components/SymbolButton";
import ErrorMessage from "../../components/ErrorMessage";
import axios from "axios";
import {BASE_URL, token} from "../../constants";


export interface Props {
  navigation: any;
}

export interface State {
  error: boolean;
  isFocused: boolean;
  enteredSymbol: string;
  symbols: [];
}

const FormScreen = (props: Props, state: State) => {
  const [error, setError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [enteredSymbol, setEnteredSymbol] = useState("");
  const [symbols, setSymbols] = useState([]);


  useEffect(() => {
    async function getSymbols() {
      const symbols = await axios.get(`${BASE_URL}/stock/symbol?exchange=US&token=${token}`);
      const symbolsTickers = symbols.data;
      setSymbols(symbolsTickers);
      console.log(symbols);
    }
      getSymbols();
  }, []);


  const onSymbolInputChanged = (text: string) => {
    setEnteredSymbol(text);
  };


  const onSubmitButtonPressed = () => {
    const symbol = symbols.find(item => item.symbol === enteredSymbol);
    if (!symbol) {
      setError(true);
    } else {
      setError(false);
      props.navigation.navigate("DetailsScreen", {symbol});
    }
  };
  return (
      <Container style={styles.container}>
        {error && <ErrorMessage/> }
        <ScrollView>
          <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
            <Form style={styles.form}>
              <View style={styles.labelTextWrapper}>
                <Text style={styles.labelText}>Enter Ticker Symbol</Text>
              </View>
              <SymbolInput onBlur={() => setIsFocused(false)}
                           onFocus={() => setIsFocused(true)}
                           value={enteredSymbol}
                           onChangeText={onSymbolInputChanged}
                           style={error && styles.inputError || (isFocused || enteredSymbol !== "") && styles.inputFocused}/>
            </Form>
            <SymbolButton style={(isFocused || enteredSymbol !== "") && styles.button}
                          onPress={onSubmitButtonPressed}/>
          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
  );
};

export default memo(FormScreen);
