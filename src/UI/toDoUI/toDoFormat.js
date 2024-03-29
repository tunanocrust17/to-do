import deleteToDo from "../../CRUD/deleteToDo";
import readToDo from "../../CRUD/readToDo";
import markTaskComplete from "../../CRUD/markcomplete";


export default function toDoFormat(parsedData, index){
    let element = document.querySelector('.task-container');

    //building the list of to do's to display to the user
    let itemsArray;
    
    //determines if we're grabbing an entire project or data from a new list that we created from individual items from each project
    if(parsedData[index].items === undefined){
        itemsArray = parsedData;
    } else {
        itemsArray = parsedData[index].items;
    }

    itemsArray.forEach((item)=>{
        
        let todoBox = document.createElement('div');
        let todoTitle = document.createElement('h3');
        let dueDate = document.createElement('p');

        let todoCheckboxDiv = document.createElement('div');
        let roundDiv = document.createElement('div');
        let labelCheckbox = document.createElement('label');
        let inputCheckbox = document.createElement('input');

        //adds the checkbox for the user to mark project complete
        labelCheckbox.setAttribute('for', 'checkbox');
        inputCheckbox.setAttribute('type', 'checkbox');
        inputCheckbox.setAttribute('id', 'checkbox')
        inputCheckbox.setAttribute('projectid', item.projectID);
        inputCheckbox.setAttribute('todoid', item.id);
        roundDiv.appendChild(labelCheckbox);
        roundDiv.appendChild(inputCheckbox);
        roundDiv.classList.add('round');
        todoCheckboxDiv.classList.add('todo-checkbox-div');
        todoCheckboxDiv.appendChild(roundDiv);
        todoBox.appendChild(todoCheckboxDiv)
        

        todoTitle.innerHTML = item.title;
        todoBox.appendChild(todoTitle);

        dueDate.innerHTML = item.dueDate;
        todoBox.appendChild(dueDate);

        let deleteButton = document.createElement('span');
        deleteButton.classList.add('delete-todo')
        deleteButton.classList.add('material-symbols-outlined');
        deleteButton.innerHTML = "delete";
        deleteButton.setAttribute('projectid', item.projectID);
        deleteButton.setAttribute('todoid', item.id)
        todoBox.appendChild(deleteButton);

        let expandButton = document.createElement('span');
        expandButton.classList.add('expand-todo')
        expandButton.classList.add('material-symbols-outlined')
        expandButton.innerHTML = 'info';
        expandButton.setAttribute('projectid', item.projectID)
        expandButton.setAttribute('todoid', item.id)
        todoBox.appendChild(expandButton);
        

        todoBox.classList.add('todo-box');
        element.appendChild(todoBox);

    })

    deleteToDo();
    readToDo();
    markTaskComplete();
}