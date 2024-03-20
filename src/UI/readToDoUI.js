import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import toDoFormat from "./toDoFormat";

export default function readToDoUI() {
    let parsedData = getDataFromLocalStorage('todo');
    let currentProjectID = parseInt(document.querySelector('.project-title').getAttribute('listid'));
    var select = document.getElementById('project-list');
    let selectedFormProject = select.getElementsByTagName('option')[select.selectedIndex].getAttribute('listid');
    let selectedFormProjectID = parseInt(selectedFormProject);
    let index = parsedData.map((item)=>item.id).indexOf(selectedFormProject);

    console.log(currentProjectID)
    console.log(selectedFormProject)

    if(currentProjectID == selectedFormProjectID){
        
        toDoFormat(parsedData, index);
        document.querySelector('.project-title').innerHTML="you did it!"
        console.log("it worked?")
    } else {
        console.log(false)
    }
    
}