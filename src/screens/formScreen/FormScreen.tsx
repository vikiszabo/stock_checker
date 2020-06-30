import * as React from "react";
import { memo, useState, useEffect } from "react";
import { Container, Form, Text } from "native-base";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import axios from "axios";
import { StackNavigationProp} from "@react-navigation/stack";

import SymbolInput from "../../components/SymbolInput";
import SymbolButton from "../../components/SymbolButton";
import ErrorMessage from "../../components/ErrorMessage";
import { BASE_URL, token } from "../../constants/apiConstants";
import { AppStackParamList } from "../../navigation/AppNavigator";

import styles from "./FormScreen.styles";

type FormScreenNavigationProp = StackNavigationProp<
    AppStackParamList,
    "FormScreen"
    >;


interface FormScreenProps {
  navigation: FormScreenNavigationProp;
}

interface FormScreenState {
  error: boolean;
  isFocused: boolean;
  enteredSymbol: string;
  symbols: [];
}


const FormScreen: React.FC<FormScreenProps> = props => {
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isFocused, setIsFocused] = useState(false);
  const [enteredSymbol, setEnteredSymbol] = useState("");
  const [symbols, setSymbols] = useState([]);
  const symbolURL = `${BASE_URL}/stock/symbol?exchange=US&token=${token}`;

  useEffect(() => {
    getSymbols();
  }, []);

  const getSymbols = async () => {
    await axios.get(symbolURL)
        .then( response => {
              const symbolResponse = response.data;
              setSymbols(symbolResponse);
            }
        )
        .catch(error => {
          setError(true);
          setErrorMsg(error.message);
        })
  };

  const onSymbolInputChanged = (text: string) => {
    setEnteredSymbol(text.replace(" ", ""));
    const symbol = symbols.find(item => item.symbol === text);
    if (symbol) {
      setError(false);
    } else {
      setError(true);
      setErrorMsg("This is not a valid Ticker Symbol!");
    }
  };

  const onSubmitButtonPressed = () => {
    const symbol = symbols.find(item => item.symbol === enteredSymbol);
    if (symbol) {
      setError(false);
      props.navigation.navigate("DetailsScreen", { symbol });
    } else {
      setError(true);
      setErrorMsg("This is not a valid Ticker Symbol!");
    }
  };

  return (
      <Container style={styles.container}>
        {error && <ErrorMessage errorMsg={errorMsg} />}
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
                           onSubmitEditing={() => onSubmitButtonPressed()}
                           style={error && styles.inputError || (isFocused || enteredSymbol.length !== 0) && styles.inputFocused}/>
            </Form>
            <SymbolButton style={(isFocused || enteredSymbol.length !== 0) && styles.button}
                          onPress={onSubmitButtonPressed}/>
          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
  );
};

export default memo(FormScreen);
