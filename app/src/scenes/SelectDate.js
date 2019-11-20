import React, { Component, useState, useEffect } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';
import { RootView, CButton, CText } from '../components';
import R from '../R';
import { connect } from 'react-redux';

const info =
  'A Time Machine Request returns the observed (in the past) or forecasted (in the future) hour-by-hour weather and daily weather conditions for a particular date. ';
const SelectDate = ({ theme, navigation }) => {
  const { cardColor } = theme;
  const [date, changeDate] = useState();
  const [epoch, changeEpoch] = useState();

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var date = year + '/' + month + '/' + date;
    changeDate(date);
  }, []);

  convertToEpoch = d => {
    console.log('********', d);
    var epochTime = Math.floor(new Date(d) / 1000);
    console.log('********', epochTime);
    changeEpoch(epochTime);
  };
  return (
    <RootView>
      <ScrollView>
        <View
          style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}
        >
          <Image
            source={R.images.time_machine}
            style={{ width: 185, height: 185 }}
          ></Image>
          <View style={{ margin: 10, paddingTop: 20 }}>
            <CText title={info} fontsize={16} />
          </View>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <DatePicker
            style={{
              alignSelf: 'center',
              backgroundColor: cardColor,
              width: 200
            }}
            date={date}
            mode='date'
            showIcon={false}
            placeholder='select date'
            format='YYYY-MM-DD'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            onDateChange={date => {
              changeDate(date);
              convertToEpoch(date);
            }}
            customStyles={{
              datePicker: {
                backgroundColor: cardColor
              }
            }}
          />
          <View style={{ margin: 10, paddingBottom: 20 }}>
            <CText title='Select Date' fontsize={18} />
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <CButton
            title='Start Time Machine'
            onPress={() =>
              navigation.navigate('TimeMachine', {
                time: epoch
              })
            }
          />
        </View>
      </ScrollView>
    </RootView>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    theme: state.themeR.theme
  };
};
export default connect(mapStateToProps)(SelectDate);
