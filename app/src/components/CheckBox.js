import React from 'react';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';
Icon.loadFont();
const styles = StyleSheet.create({
  icon: { alignSelf: 'flex-end', paddingVertical: 10 }
});
const CheckBox = ({ isChecked }) => {
  if (isChecked) {
    return (
      <Icon
        style={styles.icon}
        name={'radio-btn-active'}
        size={30}
        color='#000'
      />
    );
  } else {
    return (
      <Icon
        style={styles.icon}
        name={'radio-btn-passive'}
        size={30}
        color='#000'
      />
    );
  }
};

export { CheckBox };
