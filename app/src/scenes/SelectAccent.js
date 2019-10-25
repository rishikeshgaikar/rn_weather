import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { SettingOptionItems, RootView } from '../components';
import { connect } from 'react-redux';
import { changeAccentColor } from '../redux/Actions';
import { accentColor } from '../redux/themes';

const unitList = [
  { code: accentColor.blue, title: 'Blue' },
  { code: accentColor.orange, title: 'Orange' }
];

const SelectAccent = ({ theme, changeAccentColor, navigation }) => {
  console.log(theme);
  return (
    <RootView>
      <FlatList
        data={unitList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              changeAccentColor(item.code);
              console.log(item.code);
              navigation.navigate('SettingScreen');
            }}
          >
            <SettingOptionItems
              title={item.title}
              isChecked={theme.accentName == item.title ? true : false}
            />
          </TouchableOpacity>
        )}
      />
    </RootView>
  );
};
const mapStateToProps = state => {
  return {
    theme: state.themeR.theme
  };
};
export default connect(
  mapStateToProps,
  { changeAccentColor }
)(SelectAccent);
