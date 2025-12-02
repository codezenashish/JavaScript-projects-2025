const newTask = document.querySelector("#newTask");
const progressTask = document.querySelector("#progressTask");
const completedTask = document.querySelector("#completedTask");

progressTask.addEventListener("dragenter", (e) => {
  progressTask.classList.add("task-hover-over");
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
}
allowDrop(newTask);
allowDrop(progressTask);
allowDrop(completedTask);
