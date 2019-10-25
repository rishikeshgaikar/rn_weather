import React, { Component } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { RootView, SettingOptionItems } from '../components';
import { connect } from 'react-redux';
import { changeLang } from '../redux/Actions';

const langList = [
  { code: 'ar', title: 'Arabic' },
  { code: 'az', title: 'Azerbaijani' },
  { code: 'be', title: 'Belarusian' },
  { code: 'bg', title: 'Bulgarian' },
  { code: 'bn', title: 'Bengali' },
  { code: 'bs', title: 'Bosnian' },
  { code: 'ca', title: 'Catalan' },
  { code: 'cs', title: 'Czech' },
  { code: 'da', title: 'Danish' },
  { code: 'de', title: 'German' },
  { code: 'el', title: 'Greek' },
  { code: 'en', title: 'English' },
  { code: 'eo', title: 'Esperanto' },
  { code: 'es', title: 'Spanish' },
  { code: 'et', title: 'Estonian' },
  { code: 'fi', title: 'Finnish' },
  { code: 'fr', title: 'French' },
  { code: 'he', title: 'Hebrew' },
  { code: 'hi', title: 'Hindi' },
  { code: 'hr', title: 'Croatian' },
  { code: 'hu', title: 'Hungarian' },
  { code: 'id', title: 'Indonesian' },
  { code: 'is', title: 'Icelandic' },
  { code: 'it', title: 'Italian' },
  { code: 'ja', title: 'Japanese' },
  { code: 'ka', title: 'Georgian' },
  { code: 'kn', title: 'Kannada' },
  { code: 'ko', title: 'Korean' },
  { code: 'kw', title: 'Cornish' },
  { code: 'lv', title: 'Latvian' },
  { code: 'ml', title: 'Malayam' },
  { code: 'mr', title: 'Marathi' },
  { code: 'nb', title: 'Norwegian Bokmål' },
  { code: 'nl', title: 'Dutch' },
  { code: 'no', title: 'Norwegian Bokmål (alias for nb)' },
  { code: 'pa', title: 'Punjabi' },
  { code: 'pl', title: 'Polish' },
  { code: 'pt', title: 'Portuguese' },
  { code: 'ro', title: 'Romanian' },
  { code: 'ru', title: 'Russian' },
  { code: 'sk', title: 'Slovak' },
  { code: 'sl', title: 'Slovenian' },
  { code: 'sr', title: 'Serbian' },
  { code: 'sv', title: 'Swedish' },
  { code: 'ta', title: 'Tamil' },
  { code: 'te', title: 'Telugu' },
  { code: 'tet', title: 'Tetum' },
  { code: 'tr', title: 'Turkish' },
  { code: 'uk', title: 'Ukrainian' },
  { code: 'ur', title: 'Urdu' },
  { code: 'x-pig-latin', title: 'Igpay Atinlay' },
  { code: 'zh', title: 'simplified Chinese' },
  { code: 'zh-tw', title: 'traditional Chinese' }
];

const SelectLanguage = ({ lang, changeLang, navigation }) => {
  console.log(lang);
  return (
    <RootView>
      <FlatList
        data={langList}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              changeLang(item.code);
              console.log(item.code);
              navigation.navigate('SettingScreen');
            }}
          >
            <SettingOptionItems
              title={item.title}
              isChecked={lang == item.code ? true : false}
            />
          </TouchableOpacity>
        )}
      />
    </RootView>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    lang: state.langR.lang
  };
};
export default connect(
  mapStateToProps,
  { changeLang }
)(SelectLanguage);
