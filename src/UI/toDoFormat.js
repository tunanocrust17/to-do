import deleteToDo from "../CRUD/deleteToDo";

export default function toDoFormat(parsedData, index){
    //removes an to do items that are currently shown
    let element = document.querySelector('.content-container');
    let childDiv = document.querySelectorAll('.todo-box');
    
    if (childDiv != null){
    childDiv.forEach((item)=>{
        item.remove();
        })
    }

    //building the list of to do's to display to the user
    let itemsArray = parsedData[index].items;
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