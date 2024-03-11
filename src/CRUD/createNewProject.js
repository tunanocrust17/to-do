import projectLibrary from "../dataModels/projectLibrary";
import Project from "../dataModels/project";
import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import setDataToLocalStorage from "../Storage/setDataToLocalStorage";


export default function addNewProject() {


    const createProject = ()=> {

    if(getDataFromLocalStorage('todo') == null ) {
        localStorage.setItem('todo', '[]');
    }

    let projectTitle = document.getElementById('project-title').value

    let newProjectID = Math.floor(Date.now()*Math.random()).toString();

    let newProject = new Project (
        newProjectID,
        projectTitle
    )


    var old_data = getDataFromLocalStorage('todo');
    old_data.push(newProject)

    setDataToLocalStorage('todo', old_data)

}

    const addProjectUI = ()=> {

        var localData = getDataFromLocalStorage('todo');
        console.log(localData)
        
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

    return {

        createProject,
        addProjectUI
    }
}