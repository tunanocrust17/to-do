import addNewProject from "./createNewProject";

export default function readProject() {
    let projectContainer = document.querySelectorAll('.project-container');
    let projectTitle = document.querySelector('.project-title')

    projectContainer.forEach(item => {
        item.addEventListener('click',(e)=>{
            let projectChosen = e.target.getAttribute('listid');
            let index = addNewProject().currentLibrary.map((item)=>item.id).indexOf(projectChosen);
            console.log(index);
            console.log(projectChosen);
            console.log(addNewProject().currentLibrary[index])
            let clickedProject = addNewProject().currentLibrary[index];
            projectTitle.innerHTML = clickedProject.title;
            return projectChosen;
        })
    });
}