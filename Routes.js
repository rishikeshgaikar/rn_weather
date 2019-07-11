import { createStackNavigator, createAppContainer } from "react-navigation";
import { SplashScreen, HomeScreen } from "./app/src/scenes";

const RootStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen
    },
    HomeScreen: {
      screen: HomeScreen
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

const RootContainer = createAppContainer(RootStack);

export default RootContainer;
