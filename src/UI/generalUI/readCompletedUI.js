import removeToDoUI from "../projectUI/removeToDoUI";
import readCompletedProjects from "../../CRUD/readCompletedProjects";

export default function readCompletedProjectsUI(){
    let completedProjectsDiv = document.querySelector('.completed-projects');

    completedProjectsDiv.addEventListener('click', (e)=>{
        removeToDoUI();
        readCompletedProjects();
    })
}