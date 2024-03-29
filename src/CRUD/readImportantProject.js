import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import toDoFormat from "../UI/toDoUI/toDoFormat";
import removeToDoUI from "../UI/projectUI/removeToDoUI";

export default function readImportantProject(){

    let parsedData = getDataFromLocalStorage('todo');

    let dataLength = parsedData.length;

    let importantArray = []

    for( let i = 0; i < dataLength; i++ ) {
        let itemsCount = parsedData[i].items.length;
        let currentParsedData = parsedData[i];

        for ( let j = 0; j < itemsCount ; j++){
            if ( currentParsedData.items[j].priority === "High"){
                importantArray.push(currentParsedData.items[j])
            }
        }
    }

let importantArrayLength = importantArray.length;

toDoFormat(importantArray, importantArrayLength-1)

}