
import React from 'react';

export default class SimpleCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counterValue: 0,
    }
  }

  onInc = (event) => {
    this.setState({
      counterValue: this.state.counterValue + 1
    });
  } ;

  onDec = (event) => {
    this.setState({
      counterValue: this.state.counterValue - 1
    });
  } ;

  render() {
    return (
      <div style={{ textAlign: "center",
        border: "solid grey 3px",
         borderRadius: "5px"}}>
        <h3>{this.state.counterValue}</h3>
        <div>
          <button
            style={{ cursor: "pointer" }}
            onClick={this.onDec}
          >
            {"<<"}
          </button>
          <button
            style={{ cursor: "pointer" }}
            onClick={this.onInc}
          >
            {">>"}
          </button>
        </div>
      </div>
    );
  }
}

//export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);










/*import React from 'react';
import { getCounterValue } from 'containers/ComplexCounter/selectors';

import { createSelector } from 'reselect';

import { connect } from 'react-redux';

export default class SimpleCounter extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    }
  }

  onIncrement = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      counter: this.state.counter + 1
    });
  };

  onDecrement = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      counter: this.state.counter - 1
    });
  };

  returnState = () => {
    return this.state.counter;
  }

  render() {
    return (
      <div style={{ border: "solid grey 3px", borderRadius: "5px"}}>
        <div style={{ textAlign: "center"}}>
          <h4>Simple counter</h4>
          <h4>{this.state.counter}</h4>
          <button onClick={this.onDecrement} style={{ cursor: "pointer" }}>
            {"<<"}
          </button>
          <button onClick={this.onIncrement} style={{ cursor: "pointer" }}>
            <span>{">>"}</span>
          </button>
          <div>
          <label>Complex Counter Value</label>
          <span>{this.props.counter}</span>
            </div>
        </div>
      </div>
    );
  }
}
  const mapStateToProps = createSelector(
  getCounterValue(),
  (counter) => ({ counter })
  );

  function mapDispatchToProps(dispatch) {
  return {
  dispatch
};
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCounter);*/
