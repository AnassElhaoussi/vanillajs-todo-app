
const todoBtn = document.querySelector('.inputfield i')
const inputField = document.querySelector('.inputfield input')
const taskBox = document.querySelector('.tasks-section')
const clearButton = document.querySelector('.clr-btn button')
const tasks = document.querySelector('.tasks-section')
const dots = document.querySelector('.dots')
const miniCard = document.querySelector('.mini-card')
const deleteBtn = document.querySelector('.delete')
const checkedChoice = document.querySelector('#checked')
const checkedTasksContainer = document.querySelector('.checked-tasks')
const displayAll  = document.querySelector('#all')

let todoList = JSON.parse(localStorage.getItem('todo-list'))


let isEdited = false
let taskId;



const displayTodo = () => {

    if(todoList){
        
        let li = ""
        todoList.forEach((todo, id) => {
            li += `
                        <div class="task">
                            
                        <label for="${id}">
                            <input type="checkbox" onclick="checkTodo(${id})" id="${id}">
                            <p>${todo.name}</p>
                        </label>
            
                        <div class="settings">
                          <div class="dots"><i class="fa-solid fa-ellipsis"></i></div>
                          <div class="task-menu">
                          <div class="edit" onclick="editTask(${id},'${todo.name}')">
                            <i class="fa-solid fa-pen"></i>
                            <p>Edit</p>
                          </div>
                          <div class="delete" onclick="deleteTask(${id})">
                            <i class="fa-solid fa-trash"></i>
                            <p>Delete</p>
                          </div>
                        </div>
                        </div>
                    </div>
            `
            
        });
        
        
        tasks.innerHTML = li

    }   
}

displayTodo()

todoBtn.addEventListener('click', () => {
    let inputVal = inputField.value.trim()
    
    if(inputVal){
       if(!isEdited){
            if(!todoList){
                todoList = []
            }
            
            let userTaskInfo = {name: inputVal, type:'pending'}
            todoList.push(userTaskInfo)
            
            
            
       }


       else {
           todoList[taskId].name = inputField.value
           isEdited = false
           
       }


       inputField.value = ""
       localStorage.setItem('todo-list', JSON.stringify(todoList))
       displayTodo()

    
    }
})


clearButton.addEventListener('click', () => {
    todoList.splice(0,todoList.length)
    localStorage.setItem('todo-list', JSON.stringify(todoList))
    displayTodo()
})



const deleteTask = id => {
    todoList.splice(id, 1)
    localStorage.setItem('todo-list', JSON.stringify(todoList))
    displayTodo()

}

const editTask = (id, taskName) => {
    inputField.value = taskName
    taskId = id
    isEdited = true
}











