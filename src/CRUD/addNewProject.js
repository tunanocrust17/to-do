import projectLibrary from "../dataModels/projectLibrary";
import Project from "../dataModels/project";

export default function addNewProject() {

    let currentLibrary = projectLibrary();

    let projectTitle = document.getElementById('project-title').value

    let newProjectID = Math.floor(Date.now()*Math.random()).toString();

    let newProject = new Project (
        newProjectID,
        projectTitle
    )

    currentLibrary.push(newProject);

}