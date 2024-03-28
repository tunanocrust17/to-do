import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import setDataToLocalStorage from "../Storage/setDataToLocalStorage";
import removeToDoUI from "../UI/projectUI/removeToDoUI";
import toDoFormat from "../UI/toDoUI/toDoFormat";

export default function markTaskComplete(){
    let markCompleteBtn = document.querySelectorAll('input[id=checkbox]');

    markCompleteBtn.forEach((item)=>{
        item.addEventListener('change', function(e){

            if(getDataFromLocalStorage('completed') == null ) {
                localStorage.setItem('completed', '[]');
            }

            if(this.checked){

                let oldToDoData = getDataFromLocalStorage('todo');
                let completedData = getDataFromLocalStorage('completed');



                let currentProjectID = e.target.getAttribute('projectid')
                let clickedToDoID = e.target.getAttribute('todoid');

                //finds the index of the project clicked within the local storage array
                let currentProjectIndex = oldToDoData.map((item)=>item.id).indexOf(currentProjectID);

                //creates a variable that's the array of items for the current project being displayed
                let clickedProject = oldToDoData[currentProjectIndex].items;
        
                //finds the index of the element the user is deleting within the clicked project array of all the items
                let clickedToDoIndex = clickedProject.map((item)=>item.id).indexOf(clickedToDoID);

                //adds the item that was marked complete to a new database of all completed tasks
                completedData.push(clickedProject[clickedToDoIndex]);
                setDataToLocalStorage('completed', completedData)

                //removes the task from the items array and then saves the updated data to the local storage
                clickedProject.splice(clickedToDoIndex,1);
                setDataToLocalStorage('todo', oldToDoData);

                removeToDoUI();
                toDoFormat(oldToDoData, currentProjectIndex);

            } else{
                console.log("I've been unchecked!")
            }
        })
    })
}