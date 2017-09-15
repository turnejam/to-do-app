function onReady(){
  var toDos = [];
  var addToDoForm = document.getElementById("addToDoForm");

  function createNewToDo(){
    var newToDoText = document.getElementById("newToDoText");
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoTexts.value= "";

    renderTheUI(toDos);
  }

  function renderTheUI(toDos){
    var toDoList = document.getElementById("toDoList");

    toDoList.innerHTML = "";

    toDos.forEach(function(toDo)){
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  function emptyList(toDos){
    var finishedItems = []
    for (var i=0; i<toDos.length; i++){
      if(toDos[i].complete == true){
        finishedItems.push(toDos[i]);
      }
    }
    for (var j = 0; j<finishedItems.length; j++){
      finishedItems[j].parentNode.removeChild(finishedItems[j]);
    }
  }

  addToDoForm.addEventListener("submit", function(event){
    event.preventDefault();
    createNewToDo();
  });

  checkbox.addEventListener("change", function(){
    if (this.checked){
      checkbox.parentNode.complete = true;
    }
  });

  removeFromList.addEventListener("submit", function(event){
    event.preventDefault();
    emptyList();
  });


}

window.onload = function(){
  onReady();
}
