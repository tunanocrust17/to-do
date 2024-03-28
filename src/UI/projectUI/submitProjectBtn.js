import createNewProject from "../../CRUD/createNewProject";
import createNewProjectUI from "./createNewProjectUI";
import readProject from "../../CRUD/readProject";
import removeProjectContainer from "./removeProjectContainer";
import projectValidation from "../../FormValidation/projectValidation";

export default function submitProjectBtn() {
    const addProjectBtn = document.querySelector('.add-project-btn')
    const projectDialog = document.querySelector('.project')
    const projectForm = document.querySelector('.newProject')

    addProjectBtn.addEventListener('click', (e)=>{
        
        e.preventDefault();

        let validation = projectValidation()

        if(validation === true){
        removeProjectContainer();
        createNewProject();
        createNewProjectUI();
        projectForm.reset();
        projectDialog.close();
        readProject(); //adds functionality for user to click on the project in the sidebar and it will run a function
        }
    })
}