clearTasksBtn = document.getElementById("clear-tasks")
newTask = document.getElementById("new-task")
addingWindow = document.getElementById("addingtaskdiv")
filterWindow = document.getElementById("filtertaskdiv")
taskForm = document.getElementById("task-form");
taskTitle = document.getElementById("task")
taskList = document.getElementById("tasklist")
let userName = document.getElementById("currentUser")
//localStorage.clear()		


userName.innerText = (localStorage.getItem("user"))
/* Event Listeners */
newTask.addEventListener("click", () => {
	addingWindow.style.display = "block";
	newTask.style.display = "none"
	clearTasksBtn.style.display = "none"
})
clearTasksBtn.addEventListener("click", clearTasks)
taskForm.addEventListener("submit", addTask)
taskList.addEventListener("click", removeTask)
userName.addEventListener("click", signOut)
document.addEventListener("DOMContentLoaded", getTasks)



//Get Tasks from Local storage
function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	};
	tasks.forEach(function(task) {
		var addedTask = document.createElement("li")
		addedTask.className = "task list-items";
		addedTask.appendChild(document.createTextNode(task));
		const link = document.createElement('a');
		link.className = "delete-item secondary-content"
		link.innerHTML = "<i class=\"fa-regular fa-trash-can deep-orange-text\"></i>"
		addedTask.appendChild(link)
		taskList.appendChild(addedTask)
	})
	//enable clear task button
		if (localStorage.length>1){
		   clearTasksBtn.style.display = "inline"
		}
		else{
		   clearTasksBtn.style.display = "none"
		}
		
}



//Adding Task Function
function addTask(e) {
	let userTaskName = taskTitle.value;
	if (userTaskName.length < 2) {
		alert("Please enter a task name!")
		addingWindow.style.display = "none";
		newTask.style.display = "inline"
	} else {
		var addedTask = document.createElement("li")
		addedTask.className = "task list-items";
		addedTask.appendChild(document.createTextNode(`${userTaskName}`));
		const link = document.createElement('a');
		link.className = "delete-item secondary-content"
		link.innerHTML = "<i class=\"fa-regular fa-trash-can deep-orange-text\"></i>"
		addedTask.appendChild(link)
		taskList.appendChild(addedTask)	
		taskTitle.value = ""
		e.preventDefault();
		saveTaskinLs(userTaskName);
	}
}
/* Storing Task into local storage */
// Store Task 
function saveTaskinLs(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	};
	tasks.push(task);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	console.log(localStorage.getItem('tasks'))
}
console.log(localStorage.getItem('tasks'))
//Removing Task  
function removeTask(e) {
	if (e.target.parentElement.classList.contains("delete-item")) {
		console.log("Deleting...")
		if (confirm("Are you sure?")) {
			e.target.parentElement.parentElement.remove();
		}
	}
}
//Clearing All Tasks
function clearTasks() {
	if (confirm("This action is irreversible and will delete all tasks, do you wish to continue?")) {
		taskList.innerHTML = ""
		clearTasksBtn.style.display = "none"
	}
}
//return to normal if user is not typing
taskTitle.addEventListener("blur", () => {
	console.log("blurring")
	if (taskTitle.value.length < 2) {
		addingWindow.style.display = "none";
		newTask.style.display = "inline";
	}
})
taskTitle.addEventListener("focus", () => {
	setTimeout(() => {
		if (taskTitle.value.length < 1) {
			addingWindow.style.display = "none";
			newTask.style.display = "inline";
			clearTasksBtn.style.display = "inline"
		}
	}, 5000)
})
//Signing out the user
function signOut() {
	if (confirm(`${localStorage.getItem("user")} you are about to sign out, please note that any task in the list will be deleted. Do you wish to proceed?`)) {
		localStorage.clear()
		window.location.href = ""
	}
}


//BUILD redirect link
document.getElementById("info").addEventListener("click", ()=>{
 window.location.href="https://ubj.vercel.app/subpages/build.html"
})
