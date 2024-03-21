import readImportantProject from "../../CRUD/readImportantProject";
import removeToDoUI from "../projectUI/removeToDoUI";

export default function readImportantProjectUI(){
    let importantProjectsDiv = document.querySelector('.important-projects');

    importantProjectsDiv.addEventListener('click', (e)=>{
        removeToDoUI();
        readImportantProject()
    });
}