const CreateTaskBtn = document.querySelector("#open-add-task-modal-btn");
const todoColumn = document.querySelector("#new-task-column");
const todoProgressColumn = document.querySelector("#progress-task-column");
const todoCompletedColumn = document.querySelector("#completed-task-column");

const inputTitle = document.querySelector("#task-title-input");
const inputDescription = document.querySelector("#task-desc-input");
const tasks = document.querySelectorAll(".task");
let todoData = {};
let dragElement = null;

function makeTaskDraggable(taskElement) {
  taskElement.addEventListener("dragstart", () => {
    dragElement = taskElement;
    setTimeout(() => taskElement.classList.add("dragging"), 0);
  });
  taskElement.addEventListener("dragend", () => {
    taskElement.classList.remove("dragging");
    dragElement = null;
  });
}

tasks.forEach(makeTaskDraggable);

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
    if (dragElement) {
      column.appendChild(dragElement);
    }
    column.classList.remove("task-hover-over");
    updateTaskCounts();
  });
}

allowDrop(todoColumn);
allowDrop(todoProgressColumn);
allowDrop(todoCompletedColumn);

const todoAddBtn = document.querySelector("#add-task-submit-btn");
const todoCreateBtn = document.querySelector("#open-add-task-modal-btn");
const modelInputField = document.querySelector(".addTaskModel");

todoCreateBtn.addEventListener("click", () => {
  modelInputField.classList.toggle("modelActive");
});
modelInputField.addEventListener("click", (e) => {
  if (e.target === modelInputField) {
    modelInputField.classList.remove("modelActive");
  }
});

function updateTaskCounts() {
  const allSectionTaskCount = [
    todoColumn,
    todoProgressColumn,
    todoCompletedColumn,
  ];

  allSectionTaskCount.map((cal) => {
    const tasks = cal.querySelectorAll(".task");
    const countEle = cal.querySelector(".todoCount");
    if (countEle) {
      countEle.textContent = tasks.length;
    }
  });
}

todoAddBtn.addEventListener("click", () => {
  const taskTitle = inputTitle.value;
  const taskDescription = inputDescription.value;

  if (!taskTitle) {
    alert("pelase enter a task title!");
  }

  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
    <h3></h3>
    <p></p>
    <div class="task-actions">
       <button class="edit-btn">Edit</button>
       <button class="delete-btn">Delete</button>
    </div>
  `;

  div.querySelector("h3").textContent = taskTitle;
  div.querySelector("p").textContent = taskDescription;

  const deleteBtn = div.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    div.remove();
  });

  makeTaskDraggable(div);
  todoColumn.appendChild(div);

  inputTitle.value = "";
  inputDescription.value = "";

  updateTaskCounts();

  modelInputField.classList.remove("modelActive");
});
