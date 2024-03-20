import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import toDoFormat from "../UI/toDoFormat";
import deleteProject from "./deleteProject";

export default function readProject() {
    let projectContainer = document.querySelectorAll('.project-container');
    let projectTitle = document.querySelector('.project-title')

   

    projectContainer.forEach(item => {
        item.addEventListener('click', (e)=>{

            let parsedData = getDataFromLocalStorage('todo');

            let projectChosen = e.target.getAttribute('listid');
            let index = parsedData.map((item)=>item.id).indexOf(projectChosen);
            let clickedProject = parsedData[index];
            projectTitle.innerHTML = clickedProject.title;
            projectTitle.setAttribute('listid', projectChosen);

            //create the delete button for the user to delete the project
            let deleteButton = document.createElement('span');
            

            deleteButton.classList.add('delete-button');
            deleteButton.classList.add('material-symbols-outlined')
            deleteButton.innerHTML = "delete"
            deleteButton.setAttribute('listid', projectChosen)
            projectTitle.appendChild(deleteButton);

            deleteProject();

            toDoFormat(parsedData, index);

        })
    });
}