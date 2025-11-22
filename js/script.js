const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = input.value;

    const del = document.createElement("span");
    del.textContent = "✕";
    del.className = "delete";
    del.onclick = () => li.remove();

    li.appendChild(del);
    list.appendChild(li);

    input.value = "";
}
