const list = document.getElementById('todo-list')

let arrayOfTodos = []

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  const populateTodos = () => {
    for (let i = 0; i < arrayOfTodos.length ; i++) {
        let element = document.createElement('li')
        let text = document.createTextNode(arrayOfTodos[i].title)
        element.appendChild(text)
        console.log(element)
        list.appendChild(element)
    }
  }

  