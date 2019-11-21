import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { rnWeatherStore, persistor } from './redux/Store';
import Root from './Root';

export default class App extends Component {
  render() {
    return (
      <Provider store={rnWeatherStore}>
        <PersistGate loading={null} persistor={persistor}>
          <Root />
        </PersistGate>
      </Provider>
    );
  }
}
