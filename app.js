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
      var deleter = document.getElementsByTagName("li");
      deleter.forEach(function(item){
        var checker = item.children
        if (checker.checked == true){
          toDoList.removeChild(item);
        }
      });
});
}

window.onload = function(){
  onReady();
}
