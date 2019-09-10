import React from 'react';
import { View } from 'react-native';
import R from '../R';

const Card = props => (
  <View
    style={{
      flex: 1,
      backgroundColor: R.colors.card,
      margin: 10,
      padding: 10,
      borderRadius: 10,
      shadowColor: R.colors.shadow,
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 10
    }}
  >
    {props.children}
  </View>
);

export { Card };
