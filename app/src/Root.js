import React, { Component } from 'react';
import { connect } from 'react-redux';
import RootContainer from './Routes';

export class Root extends Component {
  render() {
    return <RootContainer screenProps={{ theme: this.props.theme }} />;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    theme: state.themeR.theme
  };
};

export default connect(mapStateToProps)(Root);
