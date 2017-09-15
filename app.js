function onReady(){
  const addToDoForm = document.getElementById("addToDoForm");
  const addToDoText = document.getElementById("newToDoText");
  const toDoList = document.getElementById("toDoList");
  const removeFromList = document.getElementById("removeFromList");

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

  removeFromList.addEventListener("submit", (event) => {
        event.preventDefault();
        var toDoItems = document.getElementsByClassName("done");
        var finishedItems = [];
        for (var i = 0; i < toDoItems.length; i++){
          if(toDoItems[i].checked){
            finishedItems.push(toDoItems[i].parentNode);
          }
        }
        for (var j = 0; j <= finishedItems.length; j++){
            finishedItems[j].parentNode.removeChild(finishedItems[j]);
          }
        });
}

window.onload = function(){
  onReady();
}
