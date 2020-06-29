import {Dimensions, StyleSheet} from "react-native";

const { width: viewportWidth, height: viewportHeight } = Dimensions.get(
    "window"
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000"
  },
  header: {
    marginTop: 20,
    backgroundColor: "#000",
    borderBottomWidth: 0
  },
  headerIcon: {},

  symbolText: {
    marginRight: 4,
    padding: 5,
    fontFamily: "AvenirNextLTPro-Regular",
    fontSize: 15,
    color: "#FFF"
  },
  descriptionContainerView: {
    margin: 4
  },
  descriptionText: {
    padding: 5,
    fontFamily: "AvenirNextLTPro-Bold",
    fontSize: 28,
    color: "#FFF"
  },
  currentValueText: {
    padding: 5,
    fontFamily: "AvenirNextLTPro-Bold",
    fontSize: 28,
    color: "#FFF"
  },
  priceTableView: {
    margin: 4,
    marginRight: 30,
    padding: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceTitleContainerView: {
    marginBottom: 2,
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  priceContainerView: {
    padding: 5,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  priceTitles: {
    marginLeft: 4,
    padding: 5,
    fontFamily: "AvenirNextLTPro-Regular",
    fontSize: 17,
    color: "#FFF"
  },

  prices: {
    margin: 4,
    padding: 5,
    fontFamily: "AvenirNextLTPro-Bold",
    fontSize: 17,
    color: "#FFF"
  },
  motionChart: {
    width: 150,
    height: 150,
    backgroundColor: "#FFF",
    borderRadius: 30
  }
});

export default styles;
