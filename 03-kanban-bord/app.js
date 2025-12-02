const newTask = document.querySelector("#newTask");
const progressTask = document.querySelector("#progressTask");
const completedTask = document.querySelector("#completedTask");
let dragElement = null;

const tasks = document.querySelectorAll(".task");
tasks.forEach((tasks) => {
  tasks.addEventListener("drag", (e) => {
    dragElement = tasks;
    // console.log(e)
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
    column.appendChild(dragElement);
    column.classList.remove("task-hover-over");
  });
}
allowDrop(newTask);
allowDrop(progressTask);
allowDrop(completedTask);
