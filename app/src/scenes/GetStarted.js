import React, { useState, useEffect } from 'react';
import { View, Image, Platform } from 'react-native';
import R from '../R';
import { RootView, CText, CButton } from '../components';
import { apiReverseLocation, changeLoc, changeAuth } from '../redux/Actions';
import { connect } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';

const geoOptions = {
  enableHighAccuracy: true,
  timeOut: 20000,
  maximumAge: 0
};

const SelectLocation = ({
  revData,
  loading,
  navigation,
  apiReverseLocation,
  changeAuth
}) => {
  const [locError, setLocError] = useState(null);
  const { road, city } = revData;

  useEffect(() => {
    CheckPlatform();
  }, []);

  const CheckPlatform = () => {
    Platform.OS === 'ios' ? detectLoc(geoOptions) : detectLoc();
  };
  const detectLoc = options => {
    Geolocation.getCurrentPosition(
      pos => apiReverseLocation(pos.coords.latitude, pos.coords.longitude),
      err => {
        console.log(err), setLocError(err);
      },
      options
    );
  };
  return (
    <RootView>
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
      <View style={{ flex: 2, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          {locError == null ? (
            Object.keys(revData).length > 0 ? (
              <CText title={'' + road + ' , ' + city} fontsize={20}></CText>
            ) : (
              <CText title={'Fetching...'} fontsize={20}></CText>
            )
          ) : (
            <CText title={locError.message} fontsize={20}></CText>
          )}
        </View>
      </View>
      <View style={{ flex: 2, height: R.dimensions.height / 2 }}>
        <View style={{ alignItems: 'center' }}>
          <CText
            title={'Not accurate?, You can always search location.'}
            fontsize={16}
          />
        </View>
        <CButton
          title='Search Location'
          onPress={() => navigation.navigate('SearchLoc')}
        />
        <CButton
          title='Next'
          onPress={() =>
            Object.keys(revData).length > 0
              ? (navigation.navigate('HomeScreen'), changeAuth(true))
              : alert('Allow location OR search Location')
          }
        ></CButton>
      </View>
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

export default connect(mapStateToProps, {
  apiReverseLocation,
  changeLoc,
  changeAuth
})(SelectLocation);
