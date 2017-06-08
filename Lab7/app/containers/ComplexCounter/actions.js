

export function toAdd(toDo) {
  return {
    type: "addToDo",
    toDo
  };
}

export function onDone(index) {
  return {
    type: "onDone",
    index
  };
}

export function onDel(index) {
  return {
    type: "onDel",
    index
  };
}





































/*export function incCounter() {
  return {
    type: "INC"
  };
}

export function decCounter() {
  "use strict";
  return {
    type: "DEC"
  };
}

export function addTask(task) {
  "use strict";
  return {
    type: "ADD_TASK",
    task
  };
}*/
