const newTask = document.querySelector("#newTask");
const progressTask = document.querySelector("#progressTask");
const completedTask = document.querySelector("#completedTask");
let dragElement = null;

const tasks = document.querySelectorAll(".task");
tasks.forEach((tasks) => {
  tasks.addEventListener("drag", (e) => {
    dragElement = tasks;
  });
});

function allowDrop(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("task-hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("task-hover-over");
  });

  column.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    column.appendChild(dragElement);
    column.classList.remove("task-hover-over");
  });
}
allowDrop(newTask);
allowDrop(progressTask);
allowDrop(completedTask);

const addNewTaskBtn = document.querySelector("#addNewTaskBtn");
const taskDiloge = document.querySelector(".addTaskModel");

addNewTaskBtn.addEventListener("click", (e) => {
  taskDiloge.classList.toggle("modelActive");
});

taskDiloge.addEventListener("click", () => {
  taskDiloge.classList.remove("modelActive");
});
