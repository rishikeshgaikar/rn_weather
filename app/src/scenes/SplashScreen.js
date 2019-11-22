import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { RootView, CText } from '../components';
import { connect } from 'react-redux';
import R from '../R';

const SplashScreen = ({ navigation, auth }) => {
  console.log('======>', auth);
  useEffect(() => {
    setTimeout(() => {
      auth
        ? navigation.navigate('HomeScreen')
        : navigation.navigate('GetStarted');
    }, 2000);
  }, []);

  return (
    <RootView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={R.images.sun} style={{ marginVertical: 20 }}></Image>
        <CText title={'weather'} fontsize={40} />
      </View>
    </RootView>
  );
};

const mapStateToProps = ({ authR }) => {
  const { auth } = authR;
  return {
    auth
  };
};
export default connect(mapStateToProps)(SplashScreen);
