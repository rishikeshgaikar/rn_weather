import React, { Component } from "react";
import { StyleSheet, Image, Text } from "react-native";
import R from "../R";

export default class Img extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let icon = this.props.d2;
    let w = this.props.h;
    let h = this.props.w;
    // console.log(icon);
    // console.log(w);
    // console.log(h);
    switch (icon) {
      case "clear-day":
        return (
          <Image source={R.images.sunny_day} style={{ width: w, height: h }} />
        );
      case "clear-night":
        return (
          <Image source={R.images.night} style={{ width: w, height: h }} />
        );
      case "rain":
        return (
          <Image source={R.images.rainy_day} style={{ width: w, height: h }} />
        );
      case "snow":
        return (
          <Image source={R.images.snow_cloud} style={{ width: w, height: h }} />
        );
      case "sleet":
        return (
          <Image source={R.images.sleet} style={{ width: w, height: h }} />
        );
      case "wind":
        return (
          <Image source={R.images.windy_day} style={{ width: w, height: h }} />
        );
      case "fog":
        return (
          <Image source={R.images.foggy} style={{ width: w, height: h }} />
        );
      case "cloudy":
        return (
          <Image source={R.images.cloudy_day} style={{ width: w, height: h }} />
        );
      case "partly-cloudy-day":
        return (
          <Image
            source={R.images.partialy_cloudy}
            style={{ width: w, height: h }}
          />
        );
      case "partly-cloudy-night":
        return (
          <Image source={R.images.dark_night} style={{ width: w, height: h }} />
        );
      default:
        return (
          <Image
            source={R.images.sun_eclipse}
            style={{ width: w, height: h }}
          />
        );
    }
  }
}
