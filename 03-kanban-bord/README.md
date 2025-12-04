# 📋 Kanban Board Application

A fully functional, drag-and-drop Kanban board built with vanilla JavaScript. Organize your tasks across three columns: New Task, Progress, and Completed. All data is persisted in localStorage for seamless user experience.

![Kanban Board](https://img.shields.io/badge/Project-Kanban%20Board-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

## ✨ Features

- **Drag & Drop Functionality**: Seamlessly move tasks between columns (New Task → Progress → Completed)
- **Add New Tasks**: Create tasks with title and description
- **Delete Tasks**: Remove unwanted tasks with a single click
- **Persistent Storage**: All tasks are saved in browser localStorage
- **Real-time Task Count**: Each column displays the current number of tasks
- **Modal Interface**: Clean modal for adding new tasks
- **Dark Theme UI**: Modern, professional dark theme design
- **Responsive Layout**: Grid-based layout that adapts to different screen sizes

## 🚀 Demo

### How It Works:
1. Click "Add New Task" button to open the modal
2. Enter task title and description
3. Tasks are added to "New Task" column by default
4. Drag tasks between columns to update their status
5. Delete tasks using the delete button
6. All changes are automatically saved

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Custom properties (CSS variables), Grid layout, Flexbox
- **JavaScript (ES6+)**: 
  - DOM manipulation
  - Drag and Drop API
  - LocalStorage API
  - Event listeners
  - Array methods (map, filter, forEach)

## 📁 Project Structure

```
03-kanban-bord/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and theme
├── app.js          # Application logic
└── README.md       # Project documentation
```

## 💻 Installation & Usage

### Quick Start

1. **Clone or Download** the project:
   ```bash
   git clone https://github.com/codezenashish/JavaScript-projects-2025.git
   cd JavaScript-projects-2025/03-kanban-bord
   ```

2. **Open in Browser**:
   - Simply open `index.html` in your web browser
   

3. **Start Using**:
   - Click "add new task" to create your first task
   - Drag tasks between columns
   - Your data persists across browser sessions!

## 🎨 UI Components

### Columns
- **New Task**: Default column for newly created tasks
- **Progress**: For tasks currently in progress
- **Completed**: For finished tasks

### Task Card Features
- Task title (heading)
- Task description
- Delete button

### Modal
- Task title input
- Task description textarea
- Add Task button
- Click outside modal to close

## 🧩 Key JavaScript Functions

| Function | Purpose |
|----------|---------|
| `saveToLocalStorage()` | Saves todoData to localStorage |
| `loadFromLocalStorage()` | Loads tasks from localStorage on page load |
| `makeTaskDraggable()` | Adds drag event listeners to tasks |
| `allowDrop()` | Enables drop zones for columns |
| `addTaskToUI()` | Creates and appends task element to DOM |
| `deleteTask()` | Removes task from data and localStorage |
| `updateDataFromUI()` | Syncs data object with current UI state |
| `updateTaskCounts()` | Updates task count badges for each column |

## 🎯 Code Highlights

### Drag & Drop Implementation
```javascript
// Draggable task element
taskElement.addEventListener("dragstart", () => {
  dragElement = taskElement;
  taskElement.classList.add("dragging");
});

// Drop zone
column.addEventListener("drop", (e) => {
  e.preventDefault();
  column.appendChild(dragElement);
  updateDataFromUI();
  saveToLocalStorage();
});
```

### LocalStorage Persistence
```javascript
// Save
localStorage.setItem("kanbanTasks", JSON.stringify(todoData));

// Load
const data = localStorage.getItem("kanbanTasks");
todoData = JSON.parse(data);
```

## 🎨 CSS Features

- **CSS Variables**: Easy theme customization
- **Dark Theme**: Professional dark mode design
- **Smooth Transitions**: Enhanced user experience
- **Responsive Grid**: 3-column layout
- **Custom Shadows**: Depth and visual hierarchy
- **Hover Effects**: Interactive feedback

## 📱 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ⚠️ Requires modern browser with localStorage support

## 🔮 Future Enhancements

- [ ] Edit task functionality
- [ ] Task priority levels (high, medium, low)
- [ ] Due dates and reminders
- [ ] Task labels/tags
- [ ] Search and filter tasks
- [ ] Export/Import tasks (JSON)
- [ ] Multiple boards
- [ ] Keyboard shortcuts
- [ ] Mobile responsive improvements
- [ ] Light/Dark theme toggle

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

**Ashish**
- GitHub: [@codezenashish](https://github.com/codezenashish)
- Project: JavaScript Projects 2025

## 🙏 Acknowledgments

- Google Fonts (Poppins)
- Modern CSS techniques
- HTML5 Drag and Drop API

---

**⭐ If you find this project helpful, please give it a star!**
