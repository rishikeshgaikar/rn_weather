import React from 'react';
import { Text, View } from 'react-native';
import { Card, CheckBox } from '../components';
export const SettingOptionItems = ({ title, isChecked }) => {
  return (
    <Card>
      <View
        style={{
          margin: 2,
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row'
        }}
      >
        <Text
          style={{
            flex: 8,
            margin: 2,
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {title}
        </Text>

        <CheckBox
          style={{ flex: 1, alignItems: 'center' }}
          isChecked={isChecked}
        />
      </View>
    </Card>
  );
};
