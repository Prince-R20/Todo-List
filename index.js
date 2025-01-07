//To Do List App
let todoList = [];
let taskId = 0;

function addTask(title){

    const task = {
        id: taskId++,
        title: title,
        complete: false
    };

    todoList.push(task);
    console.log(`Task ${title} added successfully.`)
}

addTask("test");
console.log(todoList);