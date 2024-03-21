import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import setDataToLocalStorage from "../Storage/setDataToLocalStorage";
import toDoFormat from "../UI/toDoUI/toDoFormat";
import removeToDoUI from "../UI/projectUI/removeToDoUI";


export default function deleteToDo(){
    let deleteToDoBtn = document.querySelectorAll('.delete-todo');

    deleteToDoBtn.forEach((item)=>{
        item.addEventListener('click', (e)=>{

            let oldData = getDataFromLocalStorage('todo');

            //retrieves the current project ID and task ID from the clicked element
            let currentProjectID = e.target.getAttribute('projectid');
            let clickedToDoID = e.target.getAttribute('todoid');

            //finds the index of the project clicked within the local storage array
            let currentProjectIndex = oldData.map((item)=>item.id).indexOf(currentProjectID);

            //creates a variable that's the array of items for the current project being displayed
            let clickedProject = oldData[currentProjectIndex].items;
        
            //finds the index of the element the user is deleting within the clicked project array of all the items
            let clickedToDoIndex = clickedProject.map((item)=>item.id).indexOf(clickedToDoID);

            //removes the task from the items array and then saves the updated data to local storage
            clickedProject.splice(clickedToDoIndex,1);
            setDataToLocalStorage('todo', oldData);

            removeToDoUI();
            toDoFormat(oldData, currentProjectIndex)

        })
    })
}
