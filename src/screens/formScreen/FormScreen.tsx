import * as React from "react";
import {useState} from "react";
import {Container, Form, Text} from "native-base";
import styles from "./FormScreen.styles";
import {KeyboardAvoidingView, ScrollView, View} from "react-native";
import SymbolInput from "../../components/SymbolInput";
import SymbolButton from "../../components/SymbolButton";
import ErrorMessage from "../../components/ErrorMessage";



export interface Props {
  navigation: any;
}

export interface State {

}

const FormScreen = (props: Props, state: State) => {
  const [error, setError] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [enteredSymbol, setEnteredSymbol] = useState("");

  const onFormSubmit = () => {};

  const onSymbolInputChanged = (text: string) => {
    // console.log('onSymbolInputChanged: ', text);
    setEnteredSymbol(text);
  };


  const onSubmitButtonPressed = () => {
    // console.log('onSubmitButtonPressed - clicked');

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
                           onChange={onSymbolInputChanged}
                           style={error && styles.inputError || (isFocused || enteredSymbol !== "") && styles.inputFocused}/>
            </Form>
            <SymbolButton style={(isFocused || enteredSymbol !== "") && styles.button} onSubmitButton={() => onSubmitButtonPressed}/>
          </KeyboardAvoidingView>
        </ScrollView>
      </Container>
  );
};

export default FormScreen;
