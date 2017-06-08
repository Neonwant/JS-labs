/**
 *
 * ListItemWithLeftIcon
 *
 */

import React, { Component } from 'react';

import {ListItem} from 'modules/MaterialUI';
import ContentInbox from 'material-ui/svg-icons/content/inbox';

class ListItemWithLeftIcon extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <ListItem primaryText="Item" leftIcon={<ContentInbox/>} />
      ); // eslint-disable-line
  }
}

export default ListItemWithLeftIcon;
