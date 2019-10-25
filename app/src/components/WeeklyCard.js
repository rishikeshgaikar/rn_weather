import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DateTime, Img } from '.';
import Card from './Card';
import R from '../R';
import { connect } from 'react-redux';

const WeeklyCard = props => {
  const { unit } = props;
  return (
    <Card>
      <View style={styles.c1}>
        <DateTime isDate={true} epochTime={props.data.time} />
      </View>
      <View style={styles.c2}>
        <Img d2={props.data.icon} h={80} w={80} />
      </View>
      <View style={[styles.c3, { flexDirection: 'row' }]}>
        <Text style={styles.temp}>
          {Math.round(props.data.temperatureMax) +
            (unit == 'si' ? ' \u2103' : ' \u2109') +
            ' / ' +
            Math.round(props.data.temperatureMin) +
            (unit == 'si' ? ' \u2103' : ' \u2109')}
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  c1: {
    flex: 1,
    justifyContent: 'center'
  },
  c3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  c2: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },
  text: {
    fontFamily: R.fonts.psRegular,
    fontSize: 20
  },
  temp: {
    fontFamily: R.fonts.psRegular,
    fontSize: 20
  }
});

const mapStateToProps = state => {
  return {
    unit: state.unitR.unit
  };
};

export default connect(mapStateToProps)(WeeklyCard);
