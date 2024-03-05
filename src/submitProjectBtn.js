import { addNewProject } from "./CRUD/addNewProject";

export function submitProjectBtn() {
    const addProjectBtn = document.querySelector('.add-project-btn')

    addProjectBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        addNewProject();
    })
}