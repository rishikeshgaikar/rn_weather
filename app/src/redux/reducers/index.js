import { unitReducer } from './unitReducer';
import { themeReducer } from './themeReducer';
import { langReducer } from './langReducer';
import { apiReducer } from './apiReducer';
import { mainReducer } from './mainReducer.js';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  unitR: unitReducer,
  themeR: themeReducer,
  langR: langReducer,
  apiR: apiReducer,
  mainR: mainReducer
});
