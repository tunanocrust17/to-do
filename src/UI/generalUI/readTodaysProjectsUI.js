import removeToDoUI from "../projectUI/removeToDoUI";
import readTodaysTasks from "../../CRUD/readTodaysTasks";

export default function readTodaysProjectsUI(){
    let myDayDiv = document.querySelector('.my-day')

    myDayDiv.addEventListener('click', (e)=>{
        removeToDoUI();
        readTodaysTasks();
    })
}