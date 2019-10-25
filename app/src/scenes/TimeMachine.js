import React, { Component, useEffect } from 'react';
import { Text, View, FlatList, ScrollView } from 'react-native';
import {
  CurrentlyCardRow,
  Img,
  Loading,
  RootView,
  CText,
  Card,
  DateTime
} from '../components';
import styles from '../Styles';
import { connect } from 'react-redux';
import { apiTimeMachine } from '../redux/Actions';

const TimeMachine = ({
  loc,
  lat,
  lon,
  tmData,
  loading,
  unit,
  lang,
  navigation,
  apiTimeMachine
}) => {
  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = () => {
    const time = navigation.getParam('time', '');
    console.log(time);
    apiTimeMachine(lat, lon, unit, lang, time);
  };
  if (!loading) {
    return (
      <RootView>
        <View
          style={{
            paddingTop: 17.5,
            alignItems: 'center'
          }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <CText title={loc} fontsize={20} />
          </ScrollView>
        </View>

        <View style={styles.cc1}>
          <View style={styles.c1}>
            <Card>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Img d2={tmData.currently.icon} h={125} w={125} />

                <Text style={{ fontSize: 60 }}>
                  {Math.round(tmData.currently.temperature) +
                    (unit == 'si' ? ' \u2103' : ' \u2109')}
                </Text>
                <Text style={{ fontSize: 20 }}>{tmData.currently.summary}</Text>
              </View>
            </Card>
          </View>
          <View style={styles.c2}>
            <CurrentlyCardRow
              pressure={tmData.currently.pressure}
              windSpeed={tmData.currently.windSpeed}
              humidity={tmData.currently.humidity}
              dewPoint={tmData.currently.dewPoint}
              uvIndex={tmData.currently.uvIndex}
              visibility={tmData.currently.visibility}
              ozone={tmData.currently.ozone}
            />
          </View>
        </View>
        <View style={styles.cc2}>
          <FlatList
            data={tmData.hourly.data}
            renderItem={({ item }) => (
              <Card>
                <View style={{ flexDirection: 'row' }}>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <DateTime isDate={false} epochTime={item.time} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Img d2={item.icon} h={40} w={40} />
                    <Text>{item.summary}</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text style={{ fontSize: 30 }}>
                      {Math.round(item.temperature) +
                        (unit == 'si' ? ' \u2103' : ' \u2109')}
                    </Text>
                  </View>
                </View>
              </Card>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </RootView>
    );
  } else {
    return <Loading />;
  }
};

const mapStateToProps = ({ mainR, apiR, langR, unitR }) => {
  const { loc, lat, lon } = mainR;
  const { tmData, loading } = apiR;
  const { unit } = unitR;
  const { lang } = langR;
  console.log(lat, lon, tmData, loading, unit, lang);
  return {
    loc,
    lat,
    lon,
    tmData,
    loading,
    unit,
    lang
    // current: apiR.data ? (apiR.data.currently ? apiR.data.currently : '') : '',
    // daily: apiR.data ? (apiR.data.daily ? apiR.data.daily.data : '') : ''
  };
};
export default connect(
  mapStateToProps,
  { apiTimeMachine }
)(TimeMachine);
