export default function removeProjectsFromList() {
    const projectList = document.getElementById('project-list');

    while(projectList.firstChild){
        projectList.removeChild(projectList.firstChild)
    }
}
