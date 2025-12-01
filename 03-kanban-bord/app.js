const newTask = document.querySelector("#newTask");
const progressTask = document.querySelector("#progressTask");
const completedTask = document.querySelector("#completedTask");

progressTask.addEventListener("dragenter", (e) => {
  progressTask.classList.add("task-hover-over");
});
