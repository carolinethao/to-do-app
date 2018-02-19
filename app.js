function onReady() {
  let toDos = [];
  let id = 0;
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id++
    });

    newToDoText.value = '';

    renderTheUI();
  }

  function removeNewToDo(id){
     return toDos.filter(toDo => toDo.id !== id);
   }

   addToDoForm.addEventListener('submit', event => {
     event.preventDefault();
     createNewToDo();
     newToDoText.value = '';
   });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      const title = document.createElement('span');
      title.textContent = toDo.title;

      const button = document.createElement('button');
      button.innerHTML = 'Delete';

      toDoList.appendChild(newToDo);
      newToDo.appendChild(checkbox);
      newToDo.appendChild(title);
      newToDo.appendChild(button);

      button.addEventListener('click', () => {
        toDos = removeNewToDo(toDo.id);

        renderTheUI();
    });
  });
}

  renderTheUI();
}

window.onload = function() {
   onReady();
 };
