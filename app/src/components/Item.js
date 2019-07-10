import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Time from "./Time";
import Img from "./Img";
import R from "../R";

const Item = props => (
  <View style={styles.container}>
    <View style={styles.c1}>
      <Time style={styles.text}>{props.data.time}</Time>
    </View>
    <View style={styles.c2}>
      <Text style={styles.temp}>
        Max {Math.round(props.data.temperatureMax)}&deg;C
      </Text>
      <Text style={styles.temp}>
        Min {Math.round(props.data.temperatureMin)}&deg;C
      </Text>
    </View>
    <View style={styles.c3}>
      {/* <Text style={styles.text}>{props.data.icon}</Text> */}
      <Img d2={props.data.icon} h={40} w={40} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#f37e69",
    margin: 8,
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10
  },
  c1: {
    flex: 3,
    paddingLeft: 10,
    justifyContent: "center"
  },
  c2: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center"
  },
  c3: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: R.fonts.GoogleSans_Regular,
    fontSize: 20
  },
  temp: {
    fontFamily: R.fonts.GoogleSans_Regular,
    fontSize: 15
  }
});

export default Item;
