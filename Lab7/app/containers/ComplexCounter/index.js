
import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {toAdd, onDone, onDel} from './actions';
import { getCounterValue, getToDos } from './selectors';

class ComplexCounter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }


  onAdd = (e) => {
    const value = this.myInput.value;

    this.props.onAdd({title: value, done: false});

    this.myInput.value = "";
  }

  onDone = (i) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onDone(i);
  }

  onDel = (i) => (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onDel(i);
  }

  render() {
    let toDos = [];
    for (let i=0; i < this.props.todos.length; i++) {
      toDos.push(

          <li key={i} style={{textDecoration: this.props.todos[i].done ? "line-through" : "none"}} onClick={this.onDone(i)}>{this.props.todos[i].title}
            <button onClick={this.onDel(i)}>Delete</button>
          </li>


      )
    }
    return (
      <div style={{ textAlign: "center",
        border: "solid green 3px",
         borderRadius: "5px"}}>
        <h3>{this.props.counter}</h3>
        <div>
          <input type="text" ref={me => {this.myInput = me} }/>
          <button
            style={{ cursor: "pointer" }}
            onClick={this.onAdd}
          >
            {"+"}
          </button>
          <ul>
            {toDos}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  counter: getCounterValue(),
  todos: getToDos()
});

function mapDispatchToProps(dispatch) {
  return {
    onAdd: (todo) => dispatch(toAdd(todo)),
    onDone: (index) => dispatch(onDone(index)),
    onDel: (index) => dispatch(onDel(index)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplexCounter);




























/*
ComplexCounter.propTypes = {
  counter: React.PropTypes.number,
  tasks: React.PropTypes.arrayOf(React.PropTypes.object)
};

const mapStateToProps = createStructuredSelector({
  counter: getCounterValue(),
  tasks: getTasks()
});

function mapDispatchToProps(dispatch) {
  return {
    incCounter: () => dispatch(incCounter()),
    decCounter: () => dispatch(decCounter()),
    addTask: (task) => dispatch(addTask(task)),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComplexCounter);
*/
