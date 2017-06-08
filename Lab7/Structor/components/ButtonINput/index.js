/**
 *
 * ButtonINput
 *
 */

import React, { Component, PropTypes } from 'react';

class ButtonINput extends Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      exampleValue: '',
    };
  }

  render() {
    const {exampleValue} = this.state; // eslint-disable-line
    const {exampleProp} = this.props; // eslint-disable-line
    return (
      <div>
        <button>
          <span>My Button</span>
        </button>
        <input
               type="text"
               placeholder="Enter value"
        ></input>
      </div>
      ); // eslint-disable-line
  }
}

ButtonINput.propTypes = {
  exampleProp: PropTypes.string,
};
ButtonINput.defaultProps = {
  exampleProp: '',
};

export default ButtonINput;
