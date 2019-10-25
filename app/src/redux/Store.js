import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { Middleware } from './Middleware';
export const rnWeatherStore = createStore(rootReducer, Middleware);
