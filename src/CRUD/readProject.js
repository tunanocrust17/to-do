import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import toDoFormat from "../UI/toDoFormat";

export default function readProject() {
    let projectContainer = document.querySelectorAll('.project-container');
    let projectTitle = document.querySelector('.project-title')

   

    projectContainer.forEach(item => {
        item.addEventListener('click', (e)=>{

            let parsedData = getDataFromLocalStorage('todo');

            let projectChosen = e.target.getAttribute('listid');
            let index = parsedData.map((item)=>item.id).indexOf(projectChosen);
            console.log(index);
            console.log(projectChosen);
            console.log(parsedData[index]);
            let clickedProject = parsedData[index];
            projectTitle.innerHTML = clickedProject.title;
            projectTitle.setAttribute('listid', projectChosen);

            toDoFormat(parsedData, index);

        })
    });
}