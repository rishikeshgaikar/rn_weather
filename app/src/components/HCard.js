import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from './Card';
import R from '../R';

const HCard = props => (
  <Card>
    <Text style={styles.title}>{props.heading}</Text>
    <Text style={styles.text}>
      {props.data} {props.unit}
    </Text>
  </Card>
);

const styles = StyleSheet.create({
  title: {
    fontFamily: R.fonts.psBold,
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
  text: {
    fontFamily: R.fonts.psRegular,
    textAlign: 'center',
    fontSize: 16
  }
});

export { HCard };
