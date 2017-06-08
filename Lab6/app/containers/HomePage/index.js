/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import SimpleCounter from "components/SimpleCounter";
import ComplexCounter from "containers/ComplexCounter";
import { getCounterValue } from 'containers/ComplexCounter/selectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function


  render() {
    let simpleCounters = [];
    for (let i=0; i<this.props.counter; i++) {
      simpleCounters.push(
        <li key={i}><SimpleCounter /></li>
      )
    }

    return (
      <div >
        <ComplexCounter />
        <ul>
          {simpleCounters}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  counter: getCounterValue()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);




/*
<input ref={(me) => { this.me = me; }} />
<SimpleCounter ref={(count1) => {this.count1 = count1; }} key="1"/>
  <SimpleCounter ref="count2" key="2"/>
  <button onClick={() => {console.log(this.count1.returnState())}}>
Hello
</button>
<ComplexCounter />*/
