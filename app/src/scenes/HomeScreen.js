import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import Item from "../components/Item";
import styles from "../Styles";
import R from "../R";

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
      timezone: "",
      dataSource: ""
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
          daily: responseJson.daily.data,
          time: responseJson.currently.time,
          latitude: responseJson.latitude,
          longitude: responseJson.longitude,
          timezone: responseJson.timezone,
          dataSource: responseJson.daily.data
        })
      )
      .catch(error => {
        console.error(error);
      });
  }
  renderdaily() {
    return this.state.daily.map(dailydata => (
      <Item key={dailydata.time} dailydata={dailydata} />
    ));
  }

  render() {
    console.log(this.state.currently.time);
    var myDate = new Date(this.state.currently.time * 1000);
    console.log(myDate.toGMTString(), myDate.toLocaleString());
    console.log(this.state.daily);
    this.state.daily.map(link => console.log(link.summary));
    console.log(this.state.dataSource);

    return (
      <View style={styles.container}>
        <View style={styles.cc1}>
          <View style={styles.c1}>
            <Text style={styles.celsiusText}>
              {Math.round(this.state.currently.temperature)}&deg;C
            </Text>
            <Text>{this.state.currently.summary}</Text>
          </View>
          <View style={styles.c2}>
            <Text>Pressure: {this.state.currently.pressure} hPa</Text>
            <Text>Wind Speed: {this.state.currently.windSpeed} m/s</Text>
            <Text>Humidity: {this.state.currently.humidity} %</Text>
          </View>
        </View>

        <View style={styles.cc2}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
          {/* {this.renderdaily()} */}
        </View>
      </View>
    );
  }
}

export default HomeScreen;
