import createNewToDo from "../CRUD/createNewToDo";
import readProject from "../CRUD/readProject";

export default function submitToDoBtn(){
    const addToDoBtn = document.querySelector('.add-todo-btn');
    const todoDialog = document.querySelector('.todo');
    const todoForm = document.querySelector('.newToDo')

    addToDoBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        createNewToDo();
        todoForm.reset();
        todoDialog.close();
        readProject();
    })
}