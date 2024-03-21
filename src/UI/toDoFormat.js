import deleteToDo from "../CRUD/deleteToDo";

export default function toDoFormat(parsedData, index){
    let element = document.querySelector('.content-container');

    //building the list of to do's to display to the user
    let itemsArray;
    
    //determines if we're grabbing an entire project or data from a new list that we created from individual items from each project
    if(parsedData[index].items){
        itemsArray = parsedData[index].items;
    } else {
        itemsArray = parsedData;
    };
    
    
    console.log(itemsArray);

    itemsArray.forEach((item)=>{
        
        let todoBox = document.createElement('div');
        let todoTitle = document.createElement('h3');
        let dueDate = document.createElement('p');
        

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
        

        todoBox.classList.add('todo-box');
        element.appendChild(todoBox);

    })

    deleteToDo();
}