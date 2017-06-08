

const initialState = {
  counter: 0,
  todos: []
};

function complexCounterReducer(state = initialState, action) {
  switch (action.type) {
    case "addToDo":
      let newToDos = state.todos.slice();
      newToDos.push(action.toDo);
      return { ...state,
        todos: newToDos,
      };
    case "onDone":
      let ToDos = state.todos.slice();
      ToDos[action.index].done = !ToDos[action.index].done ;
      return { ...state,
        todos: ToDos,
     };
    case "onDel":
      let Dos = state.todos.slice(0, action.index);
      Dos.concat(state.todos.slice(action.index + 1))

      return { ...state,
        todos: Dos,
      };
    default:
      return state;
  }
}

export default complexCounterReducer;







































/*const initialState = {
  counter: 0,
  tasks: [],
};

function complexCounterReducer(state = initialState, action) {
  switch (action.type) {
    case "INC":
      return {
        ...state,
      counter: state.counter + 1
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1
      };
    case "ADD_TASK":
      const tasks = state.tasks.slice();
          return {
            ...state,
            tasks: tasks.concat([action.task])
          };
    default:
      return state;
  }
}

export default complexCounterReducer;*/
