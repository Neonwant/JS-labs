/**
 *
 * ThemeProvider
 *
 */

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class ThemeProvider extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <MuiThemeProvider>
        <div>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    ); // eslint-disable-line
  }
}

export default ThemeProvider;
