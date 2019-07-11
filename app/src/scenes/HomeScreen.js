import React, { Component } from "react";
import { Text, View, FlatList, ScrollView } from "react-native";
import { HCard, Item, Img } from "../components";
import styles from "../Styles";

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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cc1}>
          <View style={styles.c1}>
            <Img d2={this.state.currently.icon} h={100} w={100} />
            <Text style={styles.celsiusText}>
              {Math.round(this.state.currently.temperature)}&deg;C
            </Text>
            <Text>{this.state.currently.summary}</Text>
          </View>
          <View style={styles.c2}>
            <ScrollView horizontal={true}>
              <HCard
                data={this.state.currently.pressure}
                heading={"Pressure"}
                unit={"hPa"}
              />
              <HCard
                data={this.state.currently.windSpeed}
                heading={"Wind Speed"}
                unit={"m/s"}
              />
              <HCard
                data={this.state.currently.humidity}
                heading={"Humidity"}
                unit={"%"}
              />
              <HCard
                data={this.state.currently.dewPoint}
                heading={"Dew Pt"}
                unit={"&deg;"}
              />
              <HCard
                data={this.state.currently.uvIndex}
                heading={"UV Index"}
                unit={""}
              />
              <HCard
                data={this.state.currently.visibility}
                heading={"Visibility"}
                unit={""}
              />
              <HCard
                data={this.state.currently.ozone}
                heading={"Ozone"}
                unit={""}
              />
            </ScrollView>
          </View>
        </View>

        <View style={styles.cc2}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => <Item data={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
