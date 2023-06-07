let form = document.getElementById("myForm");
let task = document.getElementById("task");
let addBtn = document.getElementById("add-btn");
let taskArray = [];
let list = document.getElementById("toDoList");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  stockTask();
  showTask();
});

const stockTask = () => {
  if (task.value.length > 2) {
    taskArray.push(task.value);
    console.log(taskArray)
  }
};

const showTask = () => {
  for (let i = 0; i < taskArray.length; i++) {
    list.innerHTML += `<li>${taskArray[i]}</li>`;
    task.value = "";
    taskArray = [];
    console.log(list.innerHTML)
  }
};
