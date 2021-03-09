let toDoList = [];

function ToDo(task) {
    this.task = task;
    this.completed = false;
}

function addNewTask(task) {
    let newT = new ToDo(task);
    toDoList.push(newT);
}

function removeTaskFromList(i) {
    toDoList.splice(i,1);
}

function getTaskList() {
    return toDoList;
    
}

function getTaskIndex(i) {
    return toDoList[i];
    
}

function markCompleted(i) {
    i.completed = true

}

addNewTask('buy beer for the game tonight');
addNewTask('30 min abs exercises');
addNewTask('check my stock and crypto');
console.log(getTaskList());
markCompleted(toDoList[0]);
console.log(getTaskList());
removeTaskFromList(1);
console.log(getTaskList());




