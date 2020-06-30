import {StyleSheet} from "react-native";
import color from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000"
  },
  header: {
    backgroundColor: "#000",
    borderBottomWidth: 0,
    marginLeft: 12
  },
  content: {
    marginLeft: 10
  },
  divider: {
    height: 2,
    width: "100%",
    color: color.secondaryDark,
    borderColor: "#FFFFFF",
    top: 296,
    position: "absolute",
    backgroundColor: color.secondaryDark
  }
});

export default styles;
