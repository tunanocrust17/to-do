import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";

export default function createNewProjectUI() {

    var localData = getDataFromLocalStorage('todo');
    console.log(localData)
    
    if(localData != null ) {

    localData.forEach((item)=>{

        const element = document.querySelector('.projects-list');

        const projectContainer= document.createElement('div');
        const projectBtn = document.createElement('button');
        const btnSpan = document.createElement('span');
        const projectTitleH4 = document.createElement('h4');
    
        
        btnSpan.classList.add('material-symbols-outlined');
        btnSpan.innerHTML='lists';
        projectBtn.appendChild(btnSpan);
        
        projectBtn.classList.add('icon-buttons');
        projectContainer.appendChild(projectBtn)
    
        projectTitleH4.innerHTML= item.title;
        projectContainer.appendChild(projectTitleH4);
    
        projectContainer.classList.add('project-container');
        projectContainer.setAttribute('listid', item.id);
        element.appendChild(projectContainer);
    })
}
}