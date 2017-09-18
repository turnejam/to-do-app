function onReady(){
  var toDos = [];
  var addToDoForm = document.getElementById("addToDoForm");
  var removeFromList = document.getElementById("removeFromList");

  function createNewToDo(){
    var newToDoText = document.getElementById("newToDoText");
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value= "";

    renderTheUI(toDos);
  }

  function renderTheUI(toDos){
    var toDoList = document.getElementById("toDoList");

    toDoList.innerHTML = "";

    toDos.forEach(function(toDo){
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      checkbox.className = "done";
      newLi.innerHTML = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);

      checkbox.addEventListener('change',function(event){
          toDo.complete = event.currentTarget.checked;
        });
    });
  }

  function emptyList(){
    for (var i=0; i<toDos.length; i++){
      if(toDos[i].complete == true){
        toDos.splice(i, 1);
}
};
    renderTheUI(toDos);
}

  addToDoForm.addEventListener("submit", function(event){
    event.preventDefault();
    createNewToDo();
  });

  removeFromList.addEventListener("submit", function(event){
    event.preventDefault();
    emptyList();
  });

}

window.onload = function(){
  onReady();
};
