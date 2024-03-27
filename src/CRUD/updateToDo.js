import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import setDataToLocalStorage from "../Storage/setDataToLocalStorage";

export default function updateToDo(){
    let editTaskBtn = document.querySelector('.edit-task');

    editTaskBtn.addEventListener('click', (e)=>{
        console.log('sup');

        let parsedData = getDataFromLocalStorage('todo');

        let taskTitle = document.getElementById('task-edit-title');
        let taskDesc = document.getElementById('task-edit-desc');
        let taskDueDate = document.getElementById('task-edit-dueDate');
        let taskPriority = document.getElementById('task-edit-priorities')

        //retrieves the current project ID and task ID from the clicked element
        let currentProjectID = document.getElementById('task-edit-title').getAttribute('projectid');
        let clickedToDoID = document.getElementById('task-edit-title').getAttribute('todoid');

        //finds the index of the project clicked within the local storage array
        let currentProjectIndex = parsedData.map((item)=>item.id).indexOf(currentProjectID);

        //creates a variable that's the array of items for the current project being displayed
        let clickedProject = parsedData[currentProjectIndex].items;
    
        //finds the index of the element the user is deleting within the clicked project array of all the items
        let clickedToDoIndex = clickedProject.map((item)=>item.id).indexOf(clickedToDoID);

        //sets the values to the new values the user inputs
        clickedProject[clickedToDoIndex].title = taskTitle.value;
        clickedProject[clickedToDoIndex].description = taskDesc.value;
        clickedProject[clickedToDoIndex].dueDate = taskDueDate.value;
        clickedProject[clickedToDoIndex].priority = taskPriority.value;

        setDataToLocalStorage('todo', parsedData)

        console.log(currentProjectID);
        console.log(clickedToDoID);


    })

}