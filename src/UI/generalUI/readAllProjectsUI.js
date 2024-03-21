import readAllProjects from "../../CRUD/readAllProjects";
import removeToDoUI from "../projectUI/removeToDoUI";

export default function(){
    let allProjects = document.querySelector('.all-projects');

    allProjects.addEventListener('click', (e)=>{
        removeToDoUI()
        readAllProjects()
    })
}