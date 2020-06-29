import * as React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export interface Props {
  navigation: any;
}

export interface State {

}

const NotFoundScreen = (props: Props, state: State) => {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>This screen doesn't exist.</Text>
        <TouchableOpacity onPress={() => {}} style={styles.link}>
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
    color: "#E9563E",
      fontFamily: "AvenirNextLTPro-Bold",
  },
});

export default NotFoundScreen;
