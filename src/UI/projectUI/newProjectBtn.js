export default function addProjectButton(){
    const addProject = document.querySelector(".new-list-div")
    const newProjectDialog = document.querySelector(".project")

    addProject.addEventListener('click', ()=>{
        newProjectDialog.showModal();
    })
}