import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import toDoFormat from "../UI/toDoFormat";

export default function readAllProjects(){
    let parsedData = getDataFromLocalStorage('todo');

    let dataLength = parsedData.length;

    for(let i = 0; i < dataLength; i++){
        toDoFormat(parsedData, i) 
    }
}