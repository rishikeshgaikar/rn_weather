import React, { Component } from "react";
import { Text, View } from "react-native";

export class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      currently: [],
      daily: [],
      time: "",
      latitude: "",
      longitude: "",
      timezone: ""
    };
  }

  componentDidMount() {
    return fetch(
      "https://api.darksky.net/forecast/97bbbe51f6bf06e0fa1d20b2f12146b6/19.0760,72.8777?units=si&exclude=minutely,hourly,alerts",

      {
        headers: {
          "Cache-Control": "no-cache"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson =>
        this.setState({
          currently: responseJson.currently,
          daily: responseJson.daily,
          time: responseJson.currently.time,
          latitude: responseJson.latitude,
          longitude: responseJson.longitude,
          timezone: responseJson.timezone
        })
      )
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.currently.time);
    var myDate = new Date(this.state.currently.time * 1000);
    console.log(myDate.toGMTString(), myDate.toLocaleString());
    console.log(this.state.daily);
    return (
      <View>
        <Text>{this.state.latitude}</Text>
        <Text>{this.state.longitude}</Text>
        <Text>{this.state.timezone}</Text>
        <Text>{this.state.currently.summary}</Text>
        <Text>{this.state.currently.temperature}</Text>
        <Text>{this.state.currently.pressure}</Text>
        <Text>{this.state.currently.windSpeed}</Text>
        <Text>{this.state.currently.time}</Text>
        <Text>{this.state.currently.nearestStormDistance}</Text>
      </View>
    );
  }
}

export default HomeScreen;
