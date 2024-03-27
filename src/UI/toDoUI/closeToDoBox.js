export default function closeToDoBox(){
    let closeToDoBtn = document.querySelector('.close-task');

    closeToDoBtn.addEventListener('click', (e)=>{
        let taskDetailContainer = document.querySelector('.task-detail-container');
        taskDetailContainer.classList.add('display-none');
    })
}