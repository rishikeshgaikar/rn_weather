import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { Middleware } from './Middleware';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['mainR', 'apiR']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const rnWeatherStore = createStore(persistedReducer, Middleware);

let persistor = persistStore(rnWeatherStore);
export { rnWeatherStore, persistor };
