const cancelBtn = document.querySelector('.cancel-btn');
const projectForm = document.querySelector('.newProject');
const projectDialog = document.querySelector('.project');


export default function cancelProjectBtn(){

    cancelBtn.addEventListener('click', () => {
    projectForm.reset();
    projectDialog.close();
})

}