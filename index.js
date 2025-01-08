//adding todays date to ui
const todayDate = document.getElementById("todayDate");

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"]
const date = {
    weekday: new Date().getDate() + "th",
    month: months[new Date().getMonth()],
    day: days[new Date().getDay()],
    year: new Date().getFullYear()
}
todayDate.textContent = `${date.day}, ${date.weekday} ${date.month} ${date.year}.`;

//getting html element needed to add functionality
const createTask = document.getElementById("createTask");
const complete = document.getElementById("complete");
const allTask = document.getElementById("allTask");


//To Do List App
let todoList = [];
let taskId = 1;

//taking the new task
createTask.onclick = () => {
    const taskIn = document.getElementById("taskIn").value;
    addTask(taskIn)
}

//add task to the to-do list
function addTask(title){
    const task = {
        id: taskId++,
        title: title,
        complete: false
    };
    if(title == ""){
        window.alert(`Enter your task`)    
    }else{
        todoList.push(task);
        const newtask = document.createElement("label");
        newtask.textContent = title;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList = "complete";
        checkbox.id = task.id;
        checkbox.addEventListener("click", event => completeTask(task.id, newtask))

        const x = document.createElement("button");
        x.classList = "deleteTask"
        x.textContent = "x";
        x.addEventListener("click", event => deleteTask(task.id));

        const taskbox = document.createElement("div");
        taskbox.classList = "task";
        taskbox.id = task.id
        taskbox.appendChild(checkbox);
        taskbox.appendChild(newtask);
        taskbox.appendChild(x);

        allTask.appendChild(taskbox)
        
        window.alert(`Task ${title} added successfully.`)
    }
}

//Mark task as done
function completeTask(id, title){
    const task = todoList.find(task => task.id === id)
    if(task){
        task.complete = true;
        window.alert(`Task ${task.title} marked as complete`);
        title.textContent += " (Completed)"
    }else{
        window.alert(`Task not found`);
    }
}

//delete a task
function deleteTask(id){
    const index = todoList.findIndex(task => task.id === id);
    if(index !== -1){
        const remove = document.getElementById(id);
        const removeTask = todoList.splice(index, 1)[0];
        window.alert(`Task ${removeTask.title} delete.`);
        allTask.removeChild(remove)
    }else{
        window.alert("Task not found.");
    }
}

//edit task list
// function editTask(id, newTitle){
//     const task = todoList.find(task => task.id === id);
//     if(task){
//         task.tile = newTitle;
//         console.log(`Task ${id} updated to "${newTitle}".`)
//     }else{
//         console.log("Task not found.")
//     }
// }