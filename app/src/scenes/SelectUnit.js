import React from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { RootView, SettingOptionItems } from '../components';
import { connect } from 'react-redux';
import { changeUnit } from '../redux/Actions';

const unitList = [
  // { code: 'auto', title: 'Auto Based on geographic location' },
  { code: 'si', title: 'SI Units' },
  { code: 'us', title: 'US Imperial unit' }
];

const SelectUnit = ({ unit, changeUnit, navigation }) => {
  console.log(unit);
  return (
    <RootView>
      <FlatList
        data={unitList}
        extraData={unit}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              changeUnit(item.code);
              // navigation.navigate('SettingScreen');
            }}
          >
            <SettingOptionItems
              title={item.title}
              isChecked={unit == item.code ? true : false}
            />
          </TouchableOpacity>
        )}
      />
    </RootView>
  );
};
const mapStateToProps = state => {
  return {
    unit: state.unitR.unit
  };
};

export default connect(mapStateToProps, { changeUnit })(SelectUnit);
