/**
 *
 * ListItemWithRightIcon
 *
 */

import React, { PureComponent } from 'react';

import { ListItem } from 'modules/MaterialUI';
import ActionInfo from 'material-ui/svg-icons/action/info';

class ListItemWithRightIcon extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <ListItem primaryText="List Item" rightIcon={<ActionInfo />} />
      ); // eslint-disable-line
  }
}

export default ListItemWithRightIcon;
