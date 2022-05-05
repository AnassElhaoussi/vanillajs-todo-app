
const todoBtn = document.querySelector('.inputfield i')
const inputField = document.querySelector('.inputfield input')
let todos = JSON.parse(localStorage.getItem('todo-list'))
const taskBox = document.querySelector('.tasks-section')
const tasksContainer = document.querySelector('.tasks-section')


const displayTodos = () => {
    let box = ""
    todos.forEach((todo, id) => {

        box += `
        <div class="task">
            <div class="check-square"><i class="fa-solid fa-square"></i></div>
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

    taskBox.innerHTML = box

    

}


todoBtn.addEventListener('click' , () => {
    const inputFieldValue = inputField.value.trim()
    if(inputFieldValue){

        if(!todos){
            todos = []
        }

        let userTasks = {name: inputFieldValue, type: 'pending'}
        todos.push(userTasks)
        localStorage.setItem('todo-list', JSON.stringify(todos))
        

        displayTodos()
        
    }

})




