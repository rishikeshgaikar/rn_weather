import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from '../Styles';
import R from '../R';

export class SplashScreen extends Component {
  componentDidMount() {
    const { navigate } = this.props.navigation;
    setTimeout(() => {
      navigate('HomeScreen');
    }, 1000);
  }
  render() {
    return (
      <View style={styles.splashContainer}>
        <Image source={R.images.sunny_day} style={styles.splashImg} />
        <Text style={styles.splashTitle}> rnWeather </Text>
      </View>
    );
  }
}

export default SplashScreen;
