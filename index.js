//To Do List App
let todoList = [];
let taskId = 1;

//add task to the to-do list
function addTask(title){

    const task = {
        id: taskId++,
        title: title,
        complete: false
    };

    todoList.push(task);
    console.log(`Task ${title} added successfully.`)
}

//list all task
function listTask(){
    todoList.forEach(task =>{
        console.log(`[${task.complete ? "X" : " "}] 
            ${task.id}: ${task.title}`);});
}

//Mark task as done
function completeTask(id){
    const task = todoList.find(task => task.id === id)
    if(task){
        task.complete = true;
        console.log(`Task ${task.title} marked as complete`);
    }else{
        console.log(`Task not found`);
    }
}

//delete a task
function deleteTask(id){
    const index = todoList.findIndex(task => task.id === id);
    if(index !== -1){
        const removeTask = todoList.splice(index, 1)[0];
        console.log(`Task ${removeTask.title} delete.`);
    }else{
        console.log("Task not found.");
    }
}

//edit task list
function editTask(id, newTitle){
    const task = todoList.find(task => task.id === id);
    if(task){
        task.tile = newTitle;
        console.log(`Task ${id} updated to "${newTitle}".`)
    }else{
        console.log("Task not found.")
    }
}

addTask("Learn Javascript");
addTask("Build a portfolio website");
listTask();

completeTask(1)
listTask();

deleteTask(2)
listTask();

editTask(1, "Master Javascript")
listTask();