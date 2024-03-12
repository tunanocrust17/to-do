import Project from "../dataModels/project";
import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import setDataToLocalStorage from "../Storage/setDataToLocalStorage";


export default function createNewProject() {


    if(getDataFromLocalStorage('todo') == null ) {
        localStorage.setItem('todo', '[]');
    }

    let projectTitle = document.getElementById('project-title').value

    let newProjectID = Math.floor(Date.now()*Math.random()).toString();

    let newProject = new Project (
        newProjectID,
        projectTitle
    )


    var old_data = getDataFromLocalStorage('todo');
    old_data.push(newProject)

    setDataToLocalStorage('todo', old_data)

}