import addNewProject from "./CRUD/addNewProject";
import chooseProject from "./UI/readProjectUI";
import removeProjectContainer from "./UI/removeProjectContainer";
import addProjectUI from "./UI/addProjectUI";

export default function submitProjectBtn() {
    const addProjectBtn = document.querySelector('.add-project-btn')
    const projectDialog = document.querySelector('.project')
    const projectForm = document.querySelector('.newProject')

    addProjectBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        removeProjectContainer();
        addNewProject();
        addProjectUI();
        projectForm.reset();
        projectDialog.close();
        chooseProject(); //adds functionality for user to click on the project in the sidebar and it will run a function
    })
}