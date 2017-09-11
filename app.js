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

function check() {
      document.getElementById("myCheck").checked = true;
  }

  removeFromList.addEventListener("submit", (event)=> {
    event.preventDefault();
  });
}

window.onload = function(){
  onReady();
}
