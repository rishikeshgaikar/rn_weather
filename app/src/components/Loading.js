import React from "react";
import { View, ActivityIndicator, Text, Image } from "react-native";
import styles from "../Styles";
import R from "../R";

const Loading = () => {
  return (
    <View style={styles.spinnerStyle}>
      <Image source={R.images.sunny_day} style={styles.splashImg} />
      <Text style={styles.splashTitle}> rnWeather</Text>
      <ActivityIndicator size={"large"} style={styles.spinner} />
    </View>
  );
};

export { Loading };
