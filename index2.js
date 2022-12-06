var todo = new XMLHttpRequest();

todo.open("GET", "https://dummyjson.com/todos");
todo.send();
todo.onreadystatechange = function () {
  if (todo.readyState == 4 && todo.status == 200) {
    var todos = JSON.parse(todo.responseText).todos;
    console.log(todos);
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].completed == true) {
        document.getElementById("mydiv").innerHTML += `<div class="card">
       
        <h1>${todos[i].todo}</h1>
        <p class="id">${todos[i].id} </p>
        <p>${todos[i].userId}</p>
    
      </div>`;
      }
    }
  }
};
