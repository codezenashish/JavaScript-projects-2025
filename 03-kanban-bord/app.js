const CreateTaskBtn = document.querySelector("#open-add-task-modal-btn");
const todoColumn = document.querySelector("#new-task-column");
const progressColumn = document.querySelector("#progress-task-column");
const completedColumn = document.querySelector("#completed-task-column");

const inputTitle = document.querySelector("#task-title-input");
const inputDescription = document.querySelector("#task-desc-input");

let todoData = {
  todo: [],
  progress: [],
  completed: [],
};

// SAVE DATA
function saveToLocalStorage() {
  localStorage.setItem("kanbanTasks", JSON.stringify(todoData));
}

let dragElement = null;

// MAKE TASK DRAGGABLE
function makeTaskDraggable(taskElement) {
  taskElement.addEventListener("dragstart", () => {
    dragElement = taskElement;
    setTimeout(() => taskElement.classList.add("dragging"), 0);
  });

  taskElement.addEventListener("dragend", () => {
    taskElement.classList.remove("dragging");
    dragElement = null;
    updateDataFromUI();
    saveToLocalStorage();
  });
}

// ALLOW DROP
function allowDrop(column) {
  column.addEventListener("dragenter", (e) => {
    e.preventDefault();
    column.classList.add("task-hover-over");
  });

  column.addEventListener("dragleave", (e) => {
    e.preventDefault();
    column.classList.remove("task-hover-over");
  });

  column.addEventListener("dragover", (e) => e.preventDefault());

  column.addEventListener("drop", (e) => {
    e.preventDefault();
    if (dragElement) {
      column.appendChild(dragElement);
    }
    column.classList.remove("task-hover-over");
    updateDataFromUI();
    saveToLocalStorage();
    updateTaskCounts();
  });
}

allowDrop(todoColumn);
allowDrop(progressColumn);
allowDrop(completedColumn);

// ADD TASK MODAL
const todoAddBtn = document.querySelector("#add-task-submit-btn");
const todoCreateBtn = document.querySelector("#open-add-task-modal-btn");
const modal = document.querySelector(".addTaskModel");

todoCreateBtn.addEventListener("click", () => {
  modal.classList.toggle("modelActive");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("modelActive");
  }
});

// UPDATE COUNT
function updateTaskCounts() {
  [todoColumn, progressColumn, completedColumn].forEach((col) => {
    const countEle = col.querySelector(".todoCount");
    const tasks = col.querySelectorAll(".task").length;
    if (countEle) countEle.textContent = tasks;
  });
}

// ADD TASK
todoAddBtn.addEventListener("click", () => {
  const title = inputTitle.value.trim();
  const desc = inputDescription.value.trim();

  if (!title) {
    alert("Please enter task title!");
    return;
  }

  const newTask = {
    id: Date.now(),
    title,
    desc,
  };

  todoData.todo.push(newTask);
  saveToLocalStorage();

  addTaskToUI(newTask, todoColumn);

  inputTitle.value = "";
  inputDescription.value = "";
  modal.classList.remove("modelActive");

  updateTaskCounts();
});

// ADD TASK TO UI
function addTaskToUI(task, column) {
  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");
  div.dataset.id = task.id; // ⭐ IMPORTANT: delete button uses this ID

  div.innerHTML = `
    <h3>${task.title}</h3>
    <p>${task.desc}</p>
    <button class="delete-btn">Delete</button>
  `;

  makeTaskDraggable(div);

  // DELETE BUTTON WITH ID
  div.querySelector(".delete-btn").addEventListener("click", () => {
    const taskId = Number(div.dataset.id);
    deleteTask(taskId);
    div.remove();
    updateTaskCounts();
  });

  column.appendChild(div);
}

// ⭐ DELETE TASK BY ID (MAIN FUNCTION)
function deleteTask(id) {
  todoData.todo = todoData.todo.filter((t) => t.id !== id);
  todoData.progress = todoData.progress.filter((t) => t.id !== id);
  todoData.completed = todoData.completed.filter((t) => t.id !== id);

  saveToLocalStorage();
}

// UPDATE LOCALSTORAGE AFTER DRAGGING
function updateDataFromUI() {
  todoData.todo = [...todoColumn.querySelectorAll(".task")].map((t) => ({
    id: Number(t.dataset.id),
    title: t.querySelector("h3").textContent,
    desc: t.querySelector("p").textContent,
  }));

  todoData.progress = [...progressColumn.querySelectorAll(".task")].map(
    (t) => ({
      id: Number(t.dataset.id),
      title: t.querySelector("h3").textContent,
      desc: t.querySelector("p").textContent,
    })
  );

  todoData.completed = [...completedColumn.querySelectorAll(".task")].map(
    (t) => ({
      id: Number(t.dataset.id),
      title: t.querySelector("h3").textContent,
      desc: t.querySelector("p").textContent,
    })
  );
}

// LOAD DATA ON PAGE
function loadFromLocalStorage() {
  const data = localStorage.getItem("kanbanTasks");

  if (data) {
    todoData = JSON.parse(data);

    todoData.todo.forEach((t) => addTaskToUI(t, todoColumn));
    todoData.progress.forEach((t) => addTaskToUI(t, progressColumn));
    todoData.completed.forEach((t) => addTaskToUI(t, completedColumn));
  }

  updateTaskCounts();
}

loadFromLocalStorage();
