import createNewProject from "./CRUD/createNewProject";
import chooseProject from "./UI/readProjectUI";
import removeProjectContainer from "./UI/removeProjectContainer";

export default function submitProjectBtn() {
    const addProjectBtn = document.querySelector('.add-project-btn')
    const projectDialog = document.querySelector('.project')
    const projectForm = document.querySelector('.newProject')

    addProjectBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        removeProjectContainer();
        createNewProject().createProject();
        createNewProject().addProjectUI();
        projectForm.reset();
        projectDialog.close();
        chooseProject(); //adds functionality for user to click on the project in the sidebar and it will run a function
    })
}