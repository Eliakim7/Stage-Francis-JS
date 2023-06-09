let form = document.getElementById("myForm");
let task = document.getElementById("task");
let addBtn = document.getElementById("add-btn");
let taskArray = [];
let list = document.getElementById("toDoList");
let deleteBtn = document.querySelector(".delete-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  stockTask();
  showTask();
});


const stockTask = () => {
  if (task.value.length > 2) {
    taskArray.push(task.value);
    /* console.log(taskArray) */
  }
};

const refresh = () => {
  task.value = "";
  list.innerHTML = ''; //reinitialise l'affichage
};

const showTask = () => {
  refresh();
  for (let i = 0; i < taskArray.length; i++) {
    /* console.log(i) */
    list.innerHTML += `<div id="list-container"><div>${taskArray[i]}</div><button class="delete-btn" onclick="deleteTask(${i})">supprimer</button></div>`;
  };
};

const deleteTask = (index) => {
  taskArray = taskArray.filter((task, key) => key != index);
  /* console.log(taskArray); */
  showTask();
}


