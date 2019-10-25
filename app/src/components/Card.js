import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
});

const Card = props => {
  const { cardColor } = props.theme;
  return (
    <View style={[styles.card, { backgroundColor: cardColor }]}>
      {props.children}
    </View>
  );
};

const mapStateToProps = ({ themeR }) => {
  const { theme } = themeR;
  return {
    theme
  };
};

export default connect(mapStateToProps)(Card);
