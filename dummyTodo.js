const list = document.getElementById('todo-list')

let arrayOfTodos = []

let arrayFilter = []

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
        if(arrayOfTodos[i].completed == false){
            element.classList.add("redText");
        } else{
            element.classList.add("greenText");
        }
        list.appendChild(element)
    }
  }

  const findID = () => {
        let selectedID = document.getElementById("idInput").value;
        arrayFilter = arrayOfTodos.filter(array => array.userId == selectedID);
        list.innerHTML = "";
        for (let i = 0; i < arrayFilter.length ; i++) {
            let element = document.createElement('li')
            let text = document.createTextNode(arrayFilter[i].title)
            element.appendChild(text)
            console.log(element)
            if(arrayFilter[i].completed == false){
                element.classList.add("redText");
            } else{
                element.classList.add("greenText");
            }
            list.appendChild(element)
        }
  }

  function checkComplete(status) {
    let currentArray = arrayFilter.filter(array => array.completed == status);
    list.innerHTML = "";
    
    for (let i = 0; i < currentArray.length ; i++) {
        let element = document.createElement('li')
        let text = document.createTextNode(currentArray[i].title)
        element.appendChild(text)
        console.log(element)
        if(currentArray[i].completed == false){
            element.classList.add("redText");
        } else{
            element.classList.add("greenText");
        }
        list.appendChild(element)
    }
  }
