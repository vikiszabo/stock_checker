import {StyleSheet} from "react-native";
import color from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000"
  },
  header: {
    backgroundColor: "#000",
    borderBottomWidth: 0,
    marginLeft: 4
  },
  content: {
    marginLeft: 10
  },
  divider: {
    paddingVertical:200,
    paddingHorizontal:4,
    color: color.secondaryDark,
    borderColor: "#FFFFFF",
    top: 296,
    position: "absolute"
  }
});

export default styles;
