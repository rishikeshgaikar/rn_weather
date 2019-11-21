import React, { useEffect } from 'react';
import { View } from 'react-native';
import { RootView, CText } from '../components';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const SplashScreen = ({ navigation, theme, auth }) => {
  console.log('======>', auth);
  useEffect(() => {
    setTimeout(() => {
      auth
        ? navigation.navigate('HomeScreen')
        : navigation.navigate('DetectLocation');
    }, 2000);
  }, []);

  return (
    <RootView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Icon
          style={{ padding: 10 }}
          name={'md-partly-sunny'}
          size={250}
          color={theme.iconColor}
        />
        <CText title={'rnWeather'} fontsize={40} />
      </View>
    </RootView>
  );
};

const mapStateToProps = ({ themeR, authR }) => {
  const { theme } = themeR;
  const { auth } = authR;
  return {
    theme,
    auth
  };
};
export default connect(mapStateToProps)(SplashScreen);
