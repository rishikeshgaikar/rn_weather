import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Card from './Card';
import R from '../R';

const styles = StyleSheet.create({
  title: {
    fontFamily: R.fonts.psBold,
    textAlign: 'center',
    fontSize: 20,
    margin: 10
  },
  text: {
    fontFamily: R.fonts.psRegular,
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 10
  }
});
const CurrentlyCard = props => (
  <Card>
    <Text style={styles.title}>{props.heading}</Text>
    <Text style={styles.text}>
      {props.data} {props.unit}
    </Text>
  </Card>
);

export { CurrentlyCard };
