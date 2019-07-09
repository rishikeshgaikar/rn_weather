import React, { Component } from "react";
import { Text } from "react-native";

export default class Time extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var myDate = new Date(this.props.children * 1000);
    return (
      <Text>
        <Text>{myDate.toDateString("en-IN")}</Text>
        {/* <Text>{myDate.getDay("en-IN")}</Text> */}
      </Text>
    );
  }
}
