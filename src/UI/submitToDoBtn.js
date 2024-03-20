import createNewToDo from "../CRUD/createNewToDo";
import readToDoUI from "../UI/readToDoUI";

export default function submitToDoBtn(){
    const addToDoBtn = document.querySelector('.add-todo-btn');
    const todoDialog = document.querySelector('.todo');
    const todoForm = document.querySelector('.newToDo')

    addToDoBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        createNewToDo();
        readToDoUI();
        todoForm.reset();
        todoDialog.close();
    })
}