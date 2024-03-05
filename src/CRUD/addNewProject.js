import Project from "../dataModels/project";

export function addNewProject() {

    let newProjectID = Math.floor(Date.now()*Math.random()).toString();

    let newProject = new Project (
        newProjectID,
        document.getElementById('project-title').value
    )

    console.log(newProject);

}