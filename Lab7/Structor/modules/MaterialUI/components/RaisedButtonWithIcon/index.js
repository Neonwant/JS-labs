/**
 *
 * RaisedButtonWithIcon
 *
 */

import React, { PureComponent } from 'react';
import { RaisedButton } from 'modules/MaterialUI';
import ActionAndroid from 'material-ui/svg-icons/action/android';

class RaisedButtonWithIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <RaisedButton 
        label="Button"
        labelPosition="before"
        icon={<ActionAndroid />}
      />
      ); // eslint-disable-line
  }
}

export default RaisedButtonWithIcon;
