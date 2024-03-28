export default function projectValidation(){
    let projectTitle = document.getElementById('project-title').value;

    if(projectTitle == ""){
        alert("Project must have a name!")
        return false;
    } else {
        return true;
    }
}