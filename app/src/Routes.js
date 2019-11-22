import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import {
  HomeScreen,
  SelectLocation,
  SplashScreen,
  SearchScreen,
  SettingScreen,
  SelectLanguage,
  SelectUnit,
  SelectTheme,
  SelectDate,
  TimeMachine,
  SelectAccent,
  GetStarted
} from './scenes/index';

const NotMainStack = createStackNavigator(
  {
    GetStarted: {
      screen: GetStarted,
      navigationOptions: {
        title: 'Detect Location'
      }
    },
    SearchLoc: {
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search locations'
      }
    }
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({ screenProps }) => {
      let currentTheme = screenProps.theme;
      return {
        headerBackTitle: null,
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center'
        },
        headerTintColor: currentTheme.textColor,
        headerStyle: {
          backgroundColor: currentTheme.backgroundColor
        }
      };
    }
  }
);
const MainStack = createStackNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: {
        title: 'Setting'
      }
    },
    SelectLanguage: {
      screen: SelectLanguage,
      navigationOptions: {
        title: 'Language'
      }
    },
    SelectUnit: {
      screen: SelectUnit,
      navigationOptions: {
        title: 'Unit'
      }
    },
    SelectTheme: {
      screen: SelectTheme,
      navigationOptions: {
        title: 'Theme'
      }
    },
    SelectAccent: {
      screen: SelectAccent,
      navigationOptions: {
        title: 'Accent'
      }
    },
    SelectDate: {
      screen: SelectDate,
      navigationOptions: {
        title: 'Select Date'
      }
    },
    TimeMachine: {
      screen: TimeMachine,
      navigationOptions: {
        title: 'Time Machine'
      }
    },
    SelectLocation: {
      screen: SelectLocation,
      navigationOptions: {
        title: 'Detect Location'
      }
    },

    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search locations'
      }
    }
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: ({ screenProps }) => {
      let currentTheme = screenProps.theme;
      return {
        headerBackTitle: null,
        headerTitleStyle: {
          fontWeight: 'bold',
          textAlign: 'center',
          alignSelf: 'center'
        },
        headerTintColor: currentTheme.textColor,
        headerStyle: {
          backgroundColor: currentTheme.backgroundColor
        }
      };
    }
  }
);
const SplashStack = createSwitchNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    SearchFlow: {
      screen: NotMainStack
    },
    HomeFlow: {
      screen: MainStack
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  }
);

const RootContainer = createAppContainer(SplashStack);

export default RootContainer;
