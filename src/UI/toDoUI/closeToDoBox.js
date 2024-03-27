export default function closeToDoBox(){
    let closeToDoBtn = document.querySelector('.close-task');

    closeToDoBtn.addEventListener('click', (e)=>{
        
        let taskContainer = document.querySelector('.task-container');
        taskContainer.classList.remove('task-container-small')
        taskContainer.classList.add('task-container-large');

        let taskDetailContainer = document.querySelector('.task-detail-container');
        taskDetailContainer.classList.add('display-none');
    })
}