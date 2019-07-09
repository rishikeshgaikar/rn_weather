import { StyleSheet } from "react-native";
import R from "./R";

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: "center",
    // justifyContent: "center"
  },
  c1: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center"
  },
  c2: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  cc1: {
    flex: 4
    // alignItems: "center",
    // justifyContent: "center"
  },
  cc2: {
    flex: 2
    // alignItems: "center",
    // justifyContent: "center"
  },
  statusbar: {
    backgroundColor: R.colors.statusbar
  },
  celsiusText: {
    fontSize: 70,
    fontStyle: "normal",
    fontFamily: R.fonts.GoogleSans_Bold
    // paddingTop: 30
  },
  textinput: {
    color: R.colors.white,
    fontSize: 30,
    fontStyle: "normal",
    fontFamily: R.fonts.GoogleSans_Regular,
    marginTop: 20,
    borderWidth: 0.5,
    borderRadius: 8
  }
});

export default styles;
