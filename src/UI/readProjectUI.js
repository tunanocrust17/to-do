export default function chooseProject() {
    let projectContainer = document.querySelectorAll('.project-container');

    projectContainer.forEach(item => {
        item.addEventListener('click',(e)=>{
            let projectChosen = e.target.getAttribute('listid');
            console.log(projectChosen);
            return projectChosen;
        })
    });
}