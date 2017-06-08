/**
 *
 * Placeholder
 *
 */

import React, { PureComponent } from 'react';

const innerContainerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: '#fcecd7',
	borderRadius: '4px',
	width: '100%',
	padding: '2px',
};

class Placeholder extends PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div style={{padding: '4px'}}>
        <div style={innerContainerStyle}>
          <div>
            <p style={{textAlign: 'center'}}>Placeholder</p>
            <p style={{textAlign: 'center'}}>
              <small>Replace with component</small>
            </p>
          </div>
        </div>
      </div>
      ); // eslint-disable-line
  }
}

export default Placeholder;
