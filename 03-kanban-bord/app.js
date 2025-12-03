const newTaskColumn = document.querySelector("#new-task-column");
const progressTaskColumn = document.querySelector("#progress-task-column");
const completedTaskColumn = document.querySelector("#completed-task-column");
const addTaskSubmitBtn = document.querySelector("#add-task-submit-btn");
let todoData = {};
const columns = [newTaskColumn, progressTaskColumn, completedTaskColumn];
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
allowDrop(newTaskColumn);
allowDrop(progressTaskColumn);
allowDrop(completedTaskColumn);

const openAddTaskModalBtn = document.querySelector("#open-add-task-modal-btn");
const addTaskModal = document.querySelector(".addTaskModel");

openAddTaskModalBtn.addEventListener("click", (e) => {
  addTaskModal.classList.toggle("modelActive");
});

addTaskModal.addEventListener("click", (e) => {
  if (e.target === addTaskModal) {
    addTaskModal.classList.remove("modelActive");
  }
});

addTaskSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const titleInput = document.querySelector("#task-title-input");
  const descInput = document.querySelector("#task-desc-input");

  const taskTitle = titleInput.value;
  const taskDescription = descInput.value;

  if (!taskTitle) {
    alert("Please enter a task title!");
    return;
  }

  const div = document.createElement("div");
  div.classList.add("task");
  div.setAttribute("draggable", "true");

  div.innerHTML = `
    <h3></h3>
    <p></p>
    <div class="task-actions">
       <button class="edit-btn">Edit</button>ount
       
       
       co
       <button class="delete-btn">Delete</button>
    </div>
  `;

  div.querySelector("h3").textContent = taskTitle;
  div.querySelector("p").textContent = taskDescription;

  const deleteBtn = div.querySelector(".delete-btn");
  const editBtn = div.querySelector(".edit-btn");

  deleteBtn.addEventListener("click", () => {
    div.remove();
  });

  newTaskColumn.appendChild(div);

  // columns.forEach((col) => {
  //   const tasks = col.querySelectorAll(".head-text");
  //   const count = col.querySelectorAll(".count-text");
  //   todoData[col.id] = tasks.map((t) => {
  //     return {
  //       title: t.querySelector(".task-title").innerText,
  //       description: t.querySelector("p").innerText,
  //     };
  //   });
  //   console.log(todoData);
  // });

  titleInput.value = "";
  descInput.value = "";

  addTaskModal.classList.remove("modelActive");
});
