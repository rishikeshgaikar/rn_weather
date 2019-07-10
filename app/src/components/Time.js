import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import R from "../R";

export default class Time extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var myDate = new Date(this.props.children * 1000);
    return (
      <View>
        <Text style={styles.text}>{myDate.toDateString("en-IN")}</Text>
        {/* <Text>{myDate.getDay("en-IN")}</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontFamily: R.fonts.GoogleSans_Regular,
    fontSize: 20
  }
});
