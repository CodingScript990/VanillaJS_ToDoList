// todo form selector
const toDoFrm = document.getElementById("todo-frm");
// todo form selector(input)
const toDoInput = document.querySelector("#todo-frm input");
// todo list selector
const toDoList = document.getElementById("todo-list");
// TODOS_Key
const TODOS_KEY = "todos";
// todo arrays[Storage]
let toDos = [];

// save array function event
function saveToDos() {
  // save item
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Delete ToDoList function event
function deleteToDo(e) {
  // delete selector li tag
  const li = e.target.parentElement;
  // li remove event
  li.remove();
  // filter event
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // change typeof Int(before typeof String)
  // callback saveToDos
  saveToDos();
}

// paintToDo function event
function paintToDo(newToDo) {
  // create li tag
  const li = document.createElement("li");
  // li tag is show the id value
  li.id = newToDo.id;
  // create span tag
  const span = document.createElement("span");
  // span tag is show the parameter value
  span.innerText = newToDo.text;
  // create button tag
  const btn = document.createElement("button");
  // button tag
  btn.innerText = "❌";
  // button event function
  btn.addEventListener("click", deleteToDo);
  // li in add span tag
  li.appendChild(span);
  // li in add button tag
  li.appendChild(btn);
  // ToDoList add child(li)
  toDoList.appendChild(li);
}

// submit function event
function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value; // change todo value
  toDoInput.value = ""; // initial input value
  // newToDoObj value
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj); // add todolist item(value)
  paintToDo(newToDoObj); // change todo value
  saveToDos(); // TodoList save in storage [callback]
}

// callback event function
toDoFrm.addEventListener("submit", handleToDoSubmit);

// savedToDos selector[todos value]
const savedToDos = localStorage.getItem(TODOS_KEY);
// SavedToDos not null?
if (savedToDos !== null) {
  // JSON type parse value
  const parsedToDos = JSON.parse(savedToDos);
  // toDos give in parsedToDos
  toDos = parsedToDos;
  // forEach items
  parsedToDos.forEach(paintToDo);
}
