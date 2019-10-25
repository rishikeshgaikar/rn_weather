import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import R from '../R';

const styles = StyleSheet.create({
  buttonTouchableOpacity: {
    marginHorizontal: 30,
    marginVertical: 15,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    fontSize: 20,
    fontFamily: R.fonts.psRegular
  }
});

const CButton = ({ onPress, title, theme }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonTouchableOpacity,
        { backgroundColor: theme.cardColor }
      ]}
    >
      <Text style={[styles.buttonText, { color: theme.textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    theme: state.themeR.theme
  };
};
export default connect(mapStateToProps)(CButton);
