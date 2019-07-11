import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Card = props => (
  <View style={styles.body}>
    <Text style={styles.title}>{props.heading}</Text>
    <Text style={styles.text}>
      {props.data} {props.unit}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ef553a",
    width: 150,
    margin: 8,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10
  },
  title: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10
  },
  text: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16
  }
});

export default Card;