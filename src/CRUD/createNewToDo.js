import Todo from "../dataModels/todo";
import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import setDataToLocalStorage from "../Storage/setDataToLocalStorage";

export default function createNewToDo(){
    var old_data = getDataFromLocalStorage('todo');

    let todoTitle = document.getElementById('todo-title').value;
    let todoDescription = document.getElementById('todo-description').value;
    let dueDate = document.getElementById('due-date').value;
    let todoPriorty = document.getElementById('priorities').value;
    var select = document.getElementById('project-list');
    let selectedProject = select.getElementsByTagName('option')[select.selectedIndex].getAttribute('listid');
    
    

    let newToDoID = Math.floor(Date.now()*Math.random()).toString();

    let newToDo = new Todo (
        newToDoID,
        todoTitle,
        todoDescription,
        dueDate,
        todoPriorty
    )

    let index = old_data.map((item)=>item.id).indexOf(selectedProject);
    let clickedProject = old_data[index].items;
    let updatedToDo = clickedProject.push(newToDo);
    // old_data.push(updatedToDo)
    setDataToLocalStorage('todo', old_data)

    console.log(clickedProject);    

}