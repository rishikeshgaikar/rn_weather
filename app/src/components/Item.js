import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Time, Img, Card } from '../components';
import R from '../R';

const Item = props => (
  <Card>
    <View style={styles.c1}>
      <Time style={styles.text}>{props.data.time}</Time>
    </View>
    <View style={styles.c2}>
      <Text style={styles.temp}>
        Max {Math.round(props.data.temperatureMax)}&deg;C
      </Text>
      <Text style={styles.temp}>
        Min {Math.round(props.data.temperatureMin)}&deg;C
      </Text>
    </View>
    <View style={styles.c3}>
      <Img d2={props.data.icon} h={40} w={40} />
    </View>
  </Card>
);

const styles = StyleSheet.create({
  c1: {
    flex: 3,
    paddingLeft: 10,
    justifyContent: 'center'
  },
  c2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  c3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: R.fonts.psRegular,
    fontSize: 20
  },
  temp: {
    fontFamily: R.fonts.psRegular,
    fontSize: 15
  }
});

export { Item };
