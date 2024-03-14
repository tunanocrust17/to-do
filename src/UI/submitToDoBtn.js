import createNewToDo from "../CRUD/createNewToDo";

export default function submitToDoBtn(){
    const addToDoBtn = document.querySelector('.add-todo-btn');

    addToDoBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        createNewToDo();
    })
}