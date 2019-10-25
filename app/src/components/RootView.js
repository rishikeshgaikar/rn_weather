import React from 'react';
import { View, SafeAreaView, StatusBar } from 'react-native';
import { connect } from 'react-redux';

const RootView = props => {
  const { backgroundColor, themeName } = props.theme;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: backgroundColor
        }}
      >
        <StatusBar
          barStyle={
            themeName == 'Dark Theme' ? 'light-content' : 'dark-content'
          }
          backgroundColor={backgroundColor}
        />
        {props.children}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({ themeR }) => {
  const { theme } = themeR;
  return {
    theme
  };
};
export default connect(mapStateToProps)(RootView);
