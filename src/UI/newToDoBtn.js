import retrieveProjects from "./retrieveProjects";

export default function addToDoButton() {
    const addToDo = document.querySelector('.new-todo-div');
    const newToDoDialog = document.querySelector('.todo')

    addToDo.addEventListener('click', ()=>{
        retrieveProjects();
        newToDoDialog.showModal();
    })
}