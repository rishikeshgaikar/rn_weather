/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './app/src/App';
import { name as appName } from './app.json';
require('RCTNativeAppEventEmitter');

AppRegistry.registerComponent(appName, () => App);
