import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import R from '../R';

export const DateTime = ({ isDate, epochTime }) => {
  var myDate = new Date(epochTime * 1000);
  var hours = myDate.getHours();
  var minutes = '0' + myDate.getMinutes();
  var myTime = hours + ':' + minutes.substr(-2);
  if (isDate) {
    return (
      <View>
        <Text style={styles.text}>{myDate.toDateString('en-IN')}</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text style={styles.text}>{myTime}</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  text: {
    fontFamily: R.fonts.psRegular,
    fontSize: 20
  }
});
