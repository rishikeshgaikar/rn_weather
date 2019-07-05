import { SplashScreen, HomeScreen } from "./app/src/scenes";

const RootStack = createStackNavigation({
  SplashScreen: {
    screen: SplashScreen
  },
  HomeScreen: {
    screen: HomeScreen
  }
});

const RootContainer = createAppContainer(RootStack);

export default RootContainer;
