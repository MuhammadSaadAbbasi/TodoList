let todoList = document.querySelector(".list");
let list = [];
const input = document.getElementById("todo");
const btnInput = document.querySelector(".enter");
window.addEventListener("DOMContentLoaded",()=>{
    const saved = localStorage.getItem("todos")
    console.log(saved);
    if(saved){
        list=JSON.parse(saved);
        console.log(list);
        show();
    }
});

// ✅ Save to localStorage
function saveItem(){
localStorage.setItem("todos",JSON.stringify(list));
}
function addItem() {
if (input.value.trim() === "") {
alert("No Input Found");
return; 
}

list.push({ item: input.value.trim(), done: false });
input.value = "";
saveItem();
show();
}

input.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
addItem();
}
});
btnInput.addEventListener("click", function(event) {
  addItem();
  });

function show() {
todoList.innerHTML = "";
if(list.length == 0){
document.querySelector(".con").style.display = "block";
}
else{
document.querySelector(".con").style.display = "none";
}
list.forEach((task, index) => {
const li = document.createElement("li");
li.classList.add("item");

const label = document.createElement("label");
label.classList.add("todo-label");

const checkbox = document.createElement("input");
label.classList.add("todo-label");
checkbox.classList.add("todo-checkbox");
checkbox.type = "checkbox";
checkbox.checked = task.done;
checkbox.onchange = ()=>{done(index)};

const span = document.createElement("span");
span.textContent = task.item;

if (task.done) span.classList.add("strike");

li.onclick = () => done(index);

const btn = document.createElement("button");
btn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;
btn.onclick = (e) => {
  e.stopPropagation();
  remove(index);
};
label.appendChild(checkbox);
label.appendChild(span);
li.appendChild(label);
li.appendChild(btn);
todoList.appendChild(li);
});
}

function remove(index) {
list.splice(index, 1);
saveItem();
show();

}

function done(index) {
list[index].done = !list[index].done;
saveItem();
show();
}



