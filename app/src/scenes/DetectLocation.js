import React, { useState } from 'react';
import {
  View,
  Image,
  PermissionsAndroid,
  Platform,
  ScrollView
} from 'react-native';
import R from '../R';
import { Loading, RootView, CText, CButton } from '../components';
import { apiReverseLocation, changeLoc } from '../redux/Actions';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

const geoOptions = {
  enableHighAccuracy: true,
  timeOut: 20000,
  maximumAge: 0
};

const DetectLocation = ({
  revData,
  loading,
  navigation,
  apiReverseLocation
}) => {
  const [state, setState] = useState({
    loc: '',
    lat: '',
    lon: '',
    error: ''
  });

  const locationGrant = () => {
    if (Platform.OS === 'ios') {
      console.log('ios');
      detectLoc(geoOptions);
    } else {
      async function requestLocationPermission() {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Weather App Location Permission',
              message: 'Weather App needs access to your location ',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK'
            }
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the location');
            detectLoc();
          } else {
            console.log('location permission denied');
          }
        } catch (err) {
          console.warn('ERROR', err);
        }
      }
      requestLocationPermission();
    }
  };
  const detectLoc = options => {
    console.log('detectLoc', options);
    Geolocation.getCurrentPosition(
      pos => apiReverseLocation(pos.coords.latitude, pos.coords.longitude),
      err => {
        console.log(err), setState({ error: err });
      },
      options
    );
  };
  const detectlocName = () => {
    if (loading) {
      return <Loading />;
    } else if (Object.keys(revData).length > 0) {
      const { road, city } = revData;
      return (
        <View style={{ flexDirection: 'row' }}>
          <CText title={'' + road + ' , ' + city} fontsize={20}></CText>
        </View>
      );
    }
  };

  return (
    <RootView>
      <ScrollView>
        <View
          style={{
            flex: 4,
            height: R.dimensions.height / 2,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Image
            source={R.images.detect_location}
            style={{ width: 175, height: 175 }}
          />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>{detectlocName()}</View>
        <View style={{ flex: 5, height: R.dimensions.height / 2 }}>
          <CButton
            title='Go To Home'
            onPress={() => navigation.navigate('HomeScreen')}
          ></CButton>
          <View style={{ alignItems: 'center' }}>
            <CText title={'OR'} fontsize={20} fontWeight={'bold'} />
          </View>
          <CButton title='Detect Location' onPress={() => locationGrant()} />
          <View style={{ alignItems: 'center' }}>
            <CText title={'OR'} fontsize={20} fontWeight={'bold'} />
          </View>
          <CButton
            title='Search Location'
            onPress={() => navigation.navigate('SearchScreen')}
          />
        </View>
      </ScrollView>
    </RootView>
  );
};

const mapStateToProps = ({ apiR }) => {
  const { revData, loading } = apiR;
  return {
    revData,
    loading
  };
};

export default connect(mapStateToProps, { apiReverseLocation, changeLoc })(
  DetectLocation
);
