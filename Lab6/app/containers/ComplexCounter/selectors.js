
const getCounterValue = () => state => state.get('counter').counter;
const getToDos = () => state => state.get('counter').todos;
//const getTasks = () => state => state.get('counter').tasks;

export {
  getCounterValue,
  getToDos
}
