import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import R from '../R';
const CText = ({ fontStyle, fontWeight, title, theme, fontsize }) => {
  return (
    <Text
      style={{
        color: theme.textColor,
        fontSize: fontsize,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        fontFamily: R.fonts.psRegular
      }}
    >
      {title}
    </Text>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    theme: state.themeR.theme
  };
};
export default connect(mapStateToProps)(CText);
