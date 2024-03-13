import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";

export default function retrieveProjects() {

    var localData = getDataFromLocalStorage('todo');
    

    localData.forEach((item)=>{
        const element = document.getElementById('project-list')

        const newOption = document.createElement('option');

        newOption.innerHTML = item.title;
        newOption.setAttribute('value', item.title)
        newOption.setAttribute('listid', item.id)

        element.appendChild(newOption);

    })

}