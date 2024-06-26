import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";

export default function(){
    let expandToDoBtn = document.querySelectorAll('.expand-todo');

    expandToDoBtn.forEach((item)=>{
        item.addEventListener('click', (e)=>{

            let taskContainer = document.querySelector('.task-container');
            taskContainer.classList.remove('task-container-large')
            taskContainer.classList.add('task-container-small');

            let taskDisplayDiv = document.querySelector('.task-detail-container');
            taskDisplayDiv.classList.remove('display-none');
            taskDisplayDiv.classList.add('display-flex');
            


            let parsedData = getDataFromLocalStorage('todo');

            //retrieves the current project ID and task ID from the clicked element
            let currentProjectID = e.target.getAttribute('projectid');
            let clickedToDoID = e.target.getAttribute('todoid');

            //finds the index of the project clicked within the local storage array
            let currentProjectIndex = parsedData.map((item)=>item.id).indexOf(currentProjectID);

            //creates a variable that's the array of items for the current project being displayed
            let clickedProject = parsedData[currentProjectIndex].items;
        
            //finds the index of the element the user is deleting within the clicked project array of all the items
            let clickedToDoIndex = clickedProject.map((item)=>item.id).indexOf(clickedToDoID);

            let taskTitle = document.getElementById('task-edit-title');
            taskTitle.value = clickedProject[clickedToDoIndex].title;
            taskTitle.setAttribute('projectid', currentProjectID);
            taskTitle.setAttribute('todoid', clickedToDoID);

            let taskDesc = document.getElementById('task-edit-desc');
            taskDesc.value = clickedProject[clickedToDoIndex].description;

            let taskDueDate = document.getElementById('task-edit-dueDate');
            taskDueDate.value = clickedProject[clickedToDoIndex].dueDate;

            let taskPriority = document.getElementById('task-edit-priorities')
            taskPriority.value = clickedProject[clickedToDoIndex].priority;


            
            console.log('item clicked!')
        })
    })
}