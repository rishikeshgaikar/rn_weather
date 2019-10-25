import React, { Component } from 'react';
import RootContainer from './Routes';
import { Provider } from 'react-redux';
import { rnWeatherStore } from './redux/Store';
import Root from './Root';

export default class App extends Component {
  render() {
    return (
      <Provider store={rnWeatherStore}>
        <Root />
      </Provider>
    );
  }
}
