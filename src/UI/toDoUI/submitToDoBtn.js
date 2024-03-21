import createNewToDo from "../../CRUD/createNewToDo";
import readToDoUI from "./readToDoUI";
import removeToDoUI from "../projectUI/removeToDoUI";

export default function submitToDoBtn(){
    const addToDoBtn = document.querySelector('.add-todo-btn');
    const todoDialog = document.querySelector('.todo');
    const todoForm = document.querySelector('.newToDo')

    addToDoBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        removeToDoUI();
        createNewToDo();
        readToDoUI();
        todoForm.reset();
        todoDialog.close();
    })
}