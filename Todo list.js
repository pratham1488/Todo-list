<!DOCTYPE html>
<html lang="en" data-theme="night">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;800;900&display=swap');


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

:root {
    --color-primary: #5a78ff;
    --color-secondary: #0957ff;
}

body{
    position: relative;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.author-text{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    text-align: center;
}


.container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 400px;
    min-width: 640px;
    max-width: 1000px;
    background: rgba( 255, 255, 255, 0.15 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.3 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    padding: 20px;
}

.container header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 20px;
}

header h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
}

.alert-message{
    width: 100%;
    transition: all 0.3s ease;
    transform: scale(0.9);
}

.alert-message.show{
    display: block;
    transform: scale(1);
}

.alert-message.hide{
    display: none;
}

header .input-section {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
}

.input-section input{
    margin-right: 10px;
    max-width: 100%;
}

.todos-filter{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}

.todos-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100%;
    max-height: 54vh;
    overflow-y: auto;
    width: 100%;
}

.todos-list .todo-item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
}

.todo-item p{
    margin-right: 10px;
}

.todo-item .todo-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    width: 100%;
    height: 100%;
}

.todo-actions button:not(:last-child){
    margin-right: 10px;
}

.theme-switcher{
    position: absolute;
    top: 16px;
    right: 16px;
}

/* Responsive */
@media only screen and (max-width: 530px) {
    .container {
        margin: 0 20px;
        max-width: 96%;
        min-width: 96%;
    }
}
  </style>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- CSS -->
    <link rel="stylesheet" href="css/style.css">

    <!--- Tailwind CSS & Daisy UI CSS -->
    <link href="https://cdn.jsdelivr.net/npm/daisyui@2.18.0/dist/full.css" rel="stylesheet" type="text/css" />
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2/dist/tailwind.min.css" rel="stylesheet" type="text/css" />
    <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet'>

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="res/favicon.ico">

    <title>TO-DOIT</title>
</head>
<body>

    <!-- Copyright -->
    <footer>
        <div class="author-text">
            <p>Made with ❤️ by <a href="https://github.com/pratham1488/pratham1488" target="_blank"><b>Pratham Mahajan</b></a></p>
        </div>
    </footer>
    
    <div class="container">
        <header>
            <h1>Todo List</h1>
            <!-- Error message -->
            <div class="alert-message"></div>
            <div class="input-section">
                <input type="text" placeholder="Add a todo . . ." class="input input-bordered input-secondary w-full max-w-xs" />
                <input type="date" class="input input-bordered input-secondary w-full max-w-xs schedule-date" />
                <button class="btn btn-secondary add-task-button">
                    <i class="bx bx-plus bx-sm"></i>
                </button>
            </div>
        </header>

        <div class="todos-filter">
            <div class="dropdown">
                <label tabindex="0" class="btn m-1">Filter</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li onclick="filterTodos('all')"><a>All</a></li>
                    <li onclick="filterTodos('pending')"><a>Pending</a></li>
                    <li onclick="filterTodos('completed')"><a>Completed</a></li>
                </ul>
            </div>
            <button class="btn btn-secondary delete-all-btn">
                Delete All
            </button>
        </div>

         <table class="table w-full">
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody class="todos-list-body">
            </tbody>
        </table>

    </div>

    <!--Theme switcher-->
    <div class="theme-switcher">
        <div class="dropdown dropdown-left">
            <label tabindex="0" class="btn m-1">
                <i class='bx bxs-palette bx-sm'></i>
            </label>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li class="theme-item" theme="cupcake"><a>cupcake</a></li>
                <li class="theme-item" theme="dark"><a>dark</a></li>
                <li class="theme-item" theme="light"><a>light</a></li>
                <li class="theme-item" theme="bumblebee"><a>bumblebee</a></li>
                <li class="theme-item" theme="synthwave"><a>synthwave</a></li>
                <li class="theme-item" theme="halloween"><a>halloween</a></li>
                <li class="theme-item" theme="fantasy"><a>fantasy</a></li>
                <li class="theme-item" theme="dracula"><a>dracula</a></li>
                <li class="theme-item" theme="aqua"><a>aqua</a></li>
                <li class="theme-item" theme="luxury"><a>luxury</a></li>
                <li class="theme-item" theme="night"><a>night</a></li>
            </ul>
        </div>
    </div>

    <!-- JS -->
    <script src="js/main.js"></script>

</body>
</html>
<script>
  // Abstract class for TodoItemFormatter
class TodoItemFormatter {
  formatTask(task) {
    return task.length > 14 ? task.slice(0, 14) + "..." : task;
  }

  formatDueDate(dueDate) {
    return dueDate || "No due date";
  }

  formatStatus(completed) {
    return completed ? "Completed" : "Pending";
  }
}

// Class responsible for managing Todo items
class TodoManager {
  constructor(todoItemFormatter) {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.todoItemFormatter = todoItemFormatter;
  }

  addTodo(task, dueDate) {
    const newTodo = {
      id: this.getRandomId(),
      task: this.todoItemFormatter.formatTask(task),
      dueDate: this.todoItemFormatter.formatDueDate(dueDate),
      completed: false,
      status: "pending",
    };
    this.todos.push(newTodo);
    this.saveToLocalStorage();
    return newTodo;
  }

  editTodo(id, updatedTask) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.task = updatedTask;
        this.saveToLocalStorage();
      }
      return todo;
    }
  
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      this.saveToLocalStorage();
    }
  
    toggleTodoStatus(id) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveToLocalStorage();
      }
    }
  
    clearAllTodos() {
      if (this.todos.length > 0) {
        this.todos = [];
        this.saveToLocalStorage();
      }
    }
  
    filterTodos(status) {
      switch (status) {
        case "all":
          return this.todos;
        case "pending":
          return this.todos.filter((todo) => !todo.completed);
        case "completed":
          return this.todos.filter((todo) => todo.completed);
        default:
          return [];
      }
    }
  
    getRandomId() {
      return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
      );
    }
  
    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
}

// Class responsible for managing the UI and handling events
class UIManager {
  constructor(todoManager, todoItemFormatter) {
    this.todoManager = todoManager;
    this.todoItemFormatter = todoItemFormatter;
    this.taskInput = document.querySelector("input");
    this.dateInput = document.querySelector(".schedule-date");
    this.addBtn = document.querySelector(".add-task-button");
    this.todosListBody = document.querySelector(".todos-list-body");
    this.alertMessage = document.querySelector(".alert-message");
    this.deleteAllBtn = document.querySelector(".delete-all-btn");

  this.addEventListeners();
  this.showAllTodos();
  }

  addEventListeners() {
      // Event listener for adding a new todo
      this.addBtn.addEventListener("click", () => {
          this.handleAddTodo();
      });

      // Event listener for pressing Enter key in the task input
      this.taskInput.addEventListener("keyup", (e) => {
          if (e.keyCode === 13 && this.taskInput.value.length > 0) {
              this.handleAddTodo();
          }
      });

      // Event listener for deleting all todos
      this.deleteAllBtn.addEventListener("click", () => {
          this.handleClearAllTodos();
      });

      // Event listeners for filter buttons
      const filterButtons = document.querySelectorAll(".todos-filter li");
      filterButtons.forEach((button) => {
          button.addEventListener("click", () => {
              const status = button.textContent.toLowerCase();
              this.handleFilterTodos(status);
          });
      });
  }

  handleAddTodo() {
    const task = this.taskInput.value;
    const dueDate = this.dateInput.value;
    if (task === "") {
      this.showAlertMessage("Please enter a task", "error");
    } else {
      const newTodo = this.todoManager.addTodo(task, dueDate);
      this.showAllTodos();
      this.taskInput.value = "";
      this.dateInput.value = "";
      this.showAlertMessage("Task added successfully", "success");
    }
  }

  handleClearAllTodos() {
    this.todoManager.clearAllTodos();
    this.showAllTodos();
    this.showAlertMessage("All todos cleared successfully", "success");
  }

  showAllTodos() {
    const todos = this.todoManager.filterTodos("all");
    this.displayTodos(todos);
  }

  displayTodos(todos) {

      this.todosListBody.innerHTML = "";
      
      if (todos.length === 0) {
          this.todosListBody.innerHTML = `<tr><td colspan="5" class="text-center">No task found</td></tr>`;
          return;
        }
        
      todos.forEach((todo) => {
        this.todosListBody.innerHTML += `
          <tr class="todo-item" data-id="${todo.id}">
            <td>${this.todoItemFormatter.formatTask(todo.task)}</td>
            <td>${this.todoItemFormatter.formatDueDate(todo.dueDate)}</td>
            <td>${this.todoItemFormatter.formatStatus(todo.completed)}</td>
            <td>
              <button class="btn btn-warning btn-sm" onclick="uiManager.handleEditTodo('${
                todo.id
              }')">
                <i class="bx bx-edit-alt bx-bx-xs"></i>    
              </button>
              <button class="btn btn-success btn-sm" onclick="uiManager.handleToggleStatus('${
                todo.id
              }')">
                <i class="bx bx-check bx-xs"></i>
              </button>
              <button class="btn btn-error btn-sm" onclick="uiManager.handleDeleteTodo('${
                todo.id
              }')">
                <i class="bx bx-trash bx-xs"></i>
              </button>
            </td>
          </tr>
        `;
      });
    }
    

  
handleEditTodo(id) {
  const todo = this.todoManager.todos.find((t) => t.id === id);
  if (todo) {
    this.taskInput.value = todo.task;
    this.todoManager.deleteTodo(id);

    const handleUpdate = () => {
      this.addBtn.innerHTML = "<i class='bx bx-plus bx-sm'></i>";
      this.showAlertMessage("Todo updated successfully", "success");
      this.showAllTodos();
      this.addBtn.removeEventListener("click", handleUpdate);
    };

    this.addBtn.innerHTML = "<i class='bx bx-check bx-sm'></i>";
    this.addBtn.addEventListener("click", handleUpdate);
  }
}


handleToggleStatus(id) {
this.todoManager.toggleTodoStatus(id);
this.showAllTodos();
}

handleDeleteTodo(id) {
this.todoManager.deleteTodo(id);
this.showAlertMessage("Todo deleted successfully", "success");
this.showAllTodos();
}


handleFilterTodos(status) {
  const filteredTodos = this.todoManager.filterTodos(status);
  this.displayTodos(filteredTodos);
}


showAlertMessage(message, type) {
const alertBox = `
  <div class="alert alert-${type} shadow-lg mb-5 w-full">
    <div>
      <span>${message}</span>
    </div>
  </div>
`;
this.alertMessage.innerHTML = alertBox;
this.alertMessage.classList.remove("hide");
this.alertMessage.classList.add("show");
setTimeout(() => {
  this.alertMessage.classList.remove("show");
  this.alertMessage.classList.add("hide");
}, 3000);
}
}

// Class responsible for managing the theme switcher
class ThemeSwitcher {
constructor(themes, html) {
  this.themes = themes;
  this.html = html;
  this.init();
}

init() {
  const theme = this.getThemeFromLocalStorage();
  if (theme) {
    this.setTheme(theme);
  }

  this.addThemeEventListeners();
}

addThemeEventListeners() {
  this.themes.forEach((theme) => {
    theme.addEventListener("click", () => {
      const themeName = theme.getAttribute("theme");
      this.setTheme(themeName);
      this.saveThemeToLocalStorage(themeName);
    });
  });
}

setTheme(themeName) {
  this.html.setAttribute("data-theme", themeName);
}

saveThemeToLocalStorage(themeName) {
  localStorage.setItem("theme", themeName);
}

getThemeFromLocalStorage() {
  return localStorage.getItem("theme");
}
}



// Instantiating the classes
const todoItemFormatter = new TodoItemFormatter();
const todoManager = new TodoManager(todoItemFormatter);
const uiManager = new UIManager(todoManager, todoItemFormatter);
const themes = document.querySelectorAll(".theme-item");
const html = document.querySelector("html");
const themeSwitcher = new ThemeSwitcher(themes, html);
</script>
