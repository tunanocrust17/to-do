import retrieveProjects from "./retrieveProjects";
import removeProjectsFromList from "./removeProjectChildren";

export default function addToDoButton() {
    const addToDo = document.querySelector('.new-todo-div');
    const newToDoDialog = document.querySelector('.todo')

    addToDo.addEventListener('click', ()=>{
        removeProjectsFromList();
        retrieveProjects();
        newToDoDialog.showModal();
    })
}