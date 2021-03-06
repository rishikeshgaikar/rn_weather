import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { RootView, SettingOptionItems } from '../components';
import { connect } from 'react-redux';
import { changeTheme } from '../redux/Actions';
import { lightTheme, darkTheme } from '../redux/themes';

const themeList = [
  { code: lightTheme, title: lightTheme.themeName },
  { code: darkTheme, title: darkTheme.themeName }
];

const SelectTheme = ({ theme, changeTheme, navigation }) => {
  return (
    <RootView>
      <FlatList
        data={themeList}
        extraData={theme.themeName}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item.code);
              changeTheme(item.code);
              // navigation.navigate('SettingScreen');
            }}
          >
            <SettingOptionItems
              title={item.title}
              isChecked={theme.themeName == item.title ? true : false}
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
export default connect(mapStateToProps, { changeTheme })(SelectTheme);
