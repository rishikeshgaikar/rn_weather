import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Card from './Card';
import R from '../R';

const styles = StyleSheet.create({
  title: {
    fontFamily: R.fonts.psBold,
    fontSize: 20,
    margin: 10
  },
  text: {
    fontFamily: R.fonts.psRegular,
    fontSize: 16,
    marginHorizontal: 10
  }
});
const CurrentlyCard = props => (
  <Card>
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>{props.heading}</Text>
      <Text style={styles.text}>
        {props.data} {props.unit}
      </Text>
    </View>
  </Card>
);

export { CurrentlyCard };
