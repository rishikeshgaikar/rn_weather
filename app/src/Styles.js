import { StyleSheet } from "react-native";
import R from "./R";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  c1: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  c2: {
    flex: 1,
    // flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  cc1: {
    flex: 4
  },
  cc2: {
    flex: 2
  },
  statusbar: {
    backgroundColor: R.colors.statusbar
  },
  celsiusText: {
    fontSize: 70,
    fontStyle: "normal",
    fontFamily: R.fonts.GoogleSans_Bold
  }
});

export default styles;
