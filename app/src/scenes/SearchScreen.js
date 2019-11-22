import React, { Component, useState } from 'react';
import { View, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { Loading, RootView, CText } from '../components';
import { apiLocation, changeAuth } from '../redux/Actions';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
Icon.loadFont();

const SearchScreen = ({
  locData,
  loading,
  theme,
  apiLocation,
  changeAuth,
  navigation
}) => {
  const [SearchText, SetSearchText] = useState('');

  const handleSearch = () => {
    if (SearchText == '') {
      SetSearchText('');
    } else {
      apiLocation(SearchText);
    }
  };

  renderSeparator = () => {
    const { textColor } = theme;
    return (
      <View
        style={{
          height: 1,
          backgroundColor: textColor
        }}
      />
    );
  };

  const ShowLocationList = () => {
    if (loading) {
      console.log(loading);
      return <Loading />;
    } else if (Object.keys(locData).length > 0) {
      console.log(locData);
      return (
        <FlatList
          style={{ marginHorizontal: 15 }}
          data={locData}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.lon.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                changeAuth(true);
                console.log(item.display_place, item.lat, item.lon);
                navigation.navigate('HomeScreen');
              }}
              style={{ paddingVertical: 5 }}
            >
              <CText title={item.display_name} fontsize={20} />
            </TouchableOpacity>
          )}
        />
      );
    }
  };

  const { cardColor } = theme;
  return (
    <RootView>
      <View
        style={{ backgroundColor: cardColor, margin: 10, borderRadius: 10 }}
      >
        <TextInput
          style={{ height: 50, marginHorizontal: 10 }}
          value={SearchText}
          onChangeText={text => SetSearchText(text)}
          returnKeyType='search'
          onSubmitEditing={() => {
            handleSearch();
          }}
          placeholder='Search location here.. '
        />
      </View>
      {ShowLocationList()}
    </RootView>
  );
};

const mapStateToProps = ({ apiR, themeR }) => {
  const { locData, loading } = apiR;
  const { theme } = themeR;

  console.log(locData, loading);
  return {
    locData,
    loading,
    theme
  };
};

export default connect(mapStateToProps, { apiLocation, changeAuth })(
  SearchScreen
);
