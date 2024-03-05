import { addNewProject } from "./CRUD/addNewProject";

export function submitProjectBtn() {
    const addProjectBtn = document.querySelector('.add-project-btn')
    const projectDialog = document.querySelector('.project')
    const projectForm = document.querySelector('.newProject')

    addProjectBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        addNewProject();
        projectForm.reset();
        projectDialog.close();
    })
}