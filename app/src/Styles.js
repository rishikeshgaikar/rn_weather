import { StyleSheet } from "react-native";
import R from "./R";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  c1: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  c2: {
    flex: 1,
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
  },
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  splashImg: {
    height: 100,
    width: 100
  },
  splashTitle: {
    fontSize: 30,
    fontFamily: R.fonts.GoogleSans_Regular,
    paddingTop: 20
  }
});

export default styles;
