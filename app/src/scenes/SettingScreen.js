import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { SettingItems, RootView, CText } from '../components';
import { connect } from 'react-redux';
const styles = StyleSheet.create({
  poweredText: {
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});

const SettingScreen = ({ loc, unit, theme, lang, navigation }) => {
  return (
    <RootView>
      <ScrollView>
        <SettingItems
          title='Time Machine'
          icon='arrow-right'
          Selected='See future weather!!'
          onPress={() => navigation.navigate('SelectDate')}
        />
        <SettingItems
          title='Location'
          icon='arrow-right'
          Selected={loc}
          onPress={() => navigation.navigate('DetectLocation')}
        />
        <SettingItems
          title='Unit'
          icon='arrow-right'
          Selected={unit}
          onPress={() => navigation.navigate('SelectUnit')}
        />
        <SettingItems
          title='language'
          icon='arrow-right'
          Selected={lang}
          onPress={() => navigation.navigate('SelectLanguage')}
        />
        <SettingItems
          title='Theme'
          icon='arrow-right'
          Selected={theme.themeName}
          onPress={() => navigation.navigate('SelectTheme')}
        />
        <SettingItems
          title='Accent Color'
          icon='arrow-right'
          Selected={theme.accentName}
          onPress={() => navigation.navigate('SelectAccent')}
        />
        <View style={styles.poweredText}>
          <CText title='Powered by darksky & locationiq' fontsize={18} />
        </View>
      </ScrollView>
    </RootView>
  );
};

const mapStateToProps = ({ unitR, themeR, langR, mainR }) => {
  const { unit } = unitR;
  const { theme } = themeR;
  const { lang } = langR;
  const { loc } = mainR;
  return {
    unit,
    theme,
    lang,
    loc
  };
};

export default connect(mapStateToProps, {})(SettingScreen);
