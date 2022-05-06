
const todoBtn = document.querySelector('.inputfield i')
const inputField = document.querySelector('.inputfield input')
const taskBox = document.querySelector('.tasks-section')
const clearButton = document.querySelector('.clr-btn button')
const squareDiv = document.querySelectorAll('.square')
const checkButton = document.querySelectorAll('#btn-1')
const checkedButton = document.querySelectorAll('#btn-2')
const tasks = document.querySelector('.tasks-section')

let todoList = JSON.parse(localStorage.getItem('todo-list'))



const displayTodo = () => {
    
    let tasksDiv = ""

    if(todoList){
        todoList.forEach((todo, id) => {
            tasksDiv += `
                        <div class="task">
                            <div class="square">
                                <i id="btn-1" class="fa-solid fa-square"></i>
                                <i id="btn-2" class="fa-solid fa-square-check active"></i>
                            </div>
                            
                            <p>${todo.name}</p>
                            <div class="dots"><i class="fa-solid fa-ellipsis"></i></div>
                            <div class="mini-card">
                                <div class="edit">
                                    <i class="fa-solid fa-pen"></i>
                                    <p>Edit</p>
                                </div>
                                <div class="delete">
                                    <i class="fa-solid fa-trash"></i>
                                    <p>Delete</p>
                                </div>
                            </div>
                        </div>
            `
            
        });
    
        tasks.innerHTML = tasksDiv

    }
    

    
}

displayTodo()

todoBtn.addEventListener('click', () => {
    let inputVal = inputField.value.trim()
    
    if(inputVal){
        if(!todoList){
            todoList = []
        }
        
        let userTaskInfo = {name: inputVal, type:'pending'}
        todoList.push(userTaskInfo)
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
