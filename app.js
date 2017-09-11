function onReady(){
  const addToDoForm = document.getElementById("addToDoForm");
  const addToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");

  addToDoForm.addEventListener("submit", (event) => {
      event.preventDefault();

      let title = newToDoText.value;

      let newLi = document.createElement('li');

      let checkbox = document.createElement("input");

      checkbox.type = "checkbox";

      newLi.textContent = title;

      toDoList.appendChild(newLi);

      newLi.appendChild(checkbox);

      newToDoText.value = "";

  });

}

function deleter(){
  removeFromList.addEventListener("submit", (event)=> {
    event.preventDefault();
    let deleter = toDoList.querySelector("checkbox:checked");
    deleter.parentNode.removeChild("deleter");
  });
}

window.onload = function(){
  onReady();
  deleter();
}
