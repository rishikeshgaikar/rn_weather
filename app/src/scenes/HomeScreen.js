import React, { Component, useEffect } from 'react';
import {
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Button,
  Text
} from 'react-native';
import {
  WeeklyCard,
  Img,
  Loading,
  RootView,
  CText,
  Card,
  CurrentlyCardRow
} from '../components';
import styles from '../Styles';
import { connect } from 'react-redux';
import { apiWeather } from '../redux/Actions';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

class HomeScreen extends Component {
  componentDidMount() {
    this.onFocusCall = this.props.navigation.addListener('willFocus', () => {
      this.apiCall();
    });
  }
  componentWillUnmount() {
    this.onFocusCall.remove();
  }
  apiCall() {
    this.props.apiWeather(
      this.props.lat,
      this.props.lon,
      this.props.unit,
      this.props.lang
    );
  }
  render() {
    if (!this.props.loading) {
      const { wetData } = this.props;
      return (
        <RootView>
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <TouchableOpacity
                style={{ padding: 15, alignSelf: 'flex-start' }}
                onPress={() => this.apiCall()}
              >
                <Icon name={'refresh'} size={30} color={this.props.iconColor} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                paddingTop: 17.5,
                flex: 4,
                alignItems: 'center'
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <CText title={this.props.loc} fontsize={20} />
              </ScrollView>
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                style={{ padding: 15, alignSelf: 'flex-end' }}
                onPress={() => this.props.navigation.navigate('SettingScreen')}
              >
                <Icon
                  name={'settings'}
                  size={30}
                  color={this.props.iconColor}
                />
              </TouchableOpacity>
            </View>
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
                  <Img d2={wetData.currently.icon} h={115} w={115} />

                  <Text style={{ fontSize: 50 }}>
                    {Math.round(wetData.currently.temperature) +
                      (this.props.unit == 'si' ? ' \u2103' : ' \u2109')}
                  </Text>
                  <Text style={{ fontSize: 20 }}>
                    {wetData.currently.summary}
                  </Text>
                </View>
              </Card>
            </View>
            <View style={styles.c2}>
              <CurrentlyCardRow
                pressure={wetData.currently.pressure}
                windSpeed={wetData.currently.windSpeed}
                humidity={wetData.currently.humidity}
                dewPoint={wetData.currently.dewPoint}
                uvIndex={wetData.currently.uvIndex}
                visibility={wetData.currently.visibility}
                ozone={wetData.currently.ozone}
              />
            </View>
          </View>
          <View style={styles.cc2}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={wetData.daily.data}
              renderItem={({ item }) => <WeeklyCard data={item} />}
              keyExtractor={item => item.time.toString()}
            />
          </View>
        </RootView>
      );
    } else {
      return (
        <RootView>
          <Loading />
        </RootView>
      );
    }
  }
}

const mapStateToProps = ({ mainR, apiR, langR, unitR, themeR }) => {
  const { loc, lat, lon } = mainR;
  const { wetData, loading } = apiR;
  const { unit } = unitR;
  const { lang } = langR;
  const { iconColor } = themeR.theme;
  return {
    loc,
    lat,
    lon,
    wetData,
    loading,
    unit,
    lang,
    iconColor
    // current: apiR.data ? (apiR.data.currently ? apiR.data.currently : '') : '',
    // daily: apiR.data ? (apiR.data.daily ? apiR.data.daily.data : '') : ''
  };
};
export default connect(mapStateToProps, { apiWeather })(HomeScreen);
