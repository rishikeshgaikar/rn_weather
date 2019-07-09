import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Time from "./Time";

const Item = props => (
  <View style={styles.container}>
    <View style={styles.c1}>
      <Time>{props.data.time}</Time>
    </View>
    <View style={styles.c2}>
      <Text>{Math.round(props.data.temperatureMax)}&deg;C</Text>
      <Text>{props.data.icon}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "yellow"
    // alignItems: "center",
    // justifyContent: "center"
  },
  c1: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "steelblue"
  },
  c2: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue"
  }
});

export default Item;
