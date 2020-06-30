import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {AppStackParamList} from "../navigation/AppNavigator";
import colors from "../constants/colors";


type NotFoundScreenNavigationProp = StackNavigationProp<
    AppStackParamList,
    "NotFoundScreen"
    >;


interface NotFoundScreenProps {
  navigation: NotFoundScreenNavigationProp
}

const NotFoundScreen: React.FC<NotFoundScreenProps> = props => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
        <TouchableOpacity onPress={() => { props.navigation.navigate("FormScreen");}} style={styles.link}>
          <Text style={styles.linkText}>Go to home screen!</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
      color: "#fff",
    fontWeight: "bold",
      fontFamily: "AvenirNextLTPro-Bold"
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: colors.primary,
      fontFamily: "AvenirNextLTPro-Bold",
  },
});

export default NotFoundScreen;
