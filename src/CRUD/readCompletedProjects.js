import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import toDoFormat from "../UI/toDoUI/toDoFormat";

export default function readCompletedProjects(){
    let parsedData = getDataFromLocalStorage('completed');


    let dataLength = parsedData.length;

    toDoFormat(parsedData, dataLength-1);
}