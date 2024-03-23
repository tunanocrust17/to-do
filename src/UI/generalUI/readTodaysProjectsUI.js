import getDataFromLocalStorage from "../../Storage/getDataFromLocalStorage";
import {format, isBefore} from 'date-fns'
import removeToDoUI from "../projectUI/removeToDoUI";
import toDoFormat from "../toDoUI/toDoFormat";

export default function readTodaysProjectsUI(){
    let myDayDiv = document.querySelector('.my-day')

    myDayDiv.addEventListener('click', (e)=>{

        let parsedData = getDataFromLocalStorage('todo');
        let dataLength = parsedData.length;

        let currentday = new Date();
        let currentDayFormatted = format(currentday, 'yyyy-MM-dd')


        let dateTest = parsedData[0].items[6].dueDate;
        // let formattedDateTest = parse(dateTest, 'yyyy-MM-dd', new Date())


        let myDayArray = [];

        for ( let i = 0 ; i < dataLength ; i++) {
            let itemsCount = parsedData[i].items.length;
            let currentParsedData = parsedData[i];

            for ( let j = 0 ; j < itemsCount ; j++){
                if (isBefore(currentParsedData.items[j].dueDate, currentDayFormatted) || 
                    currentDayFormatted == currentParsedData.items[j].dueDate){
                    myDayArray.push(currentParsedData.items[j])
                }
            }
        }

        console.log(myDayArray)

        let myDayArrayLength = myDayArray.length;

        for ( let k = 0 ; k < myDayArrayLength ; k++) {
            removeToDoUI();
            toDoFormat(myDayArray , k )
        }

        let workingDate;




        if( currentDayFormatted == dateTest){
            workingDate = "IT'S THE SAME!"
        } else {
            workingDate = "NOPE IT'S WRONG!"
        }

        console.log(workingDate)
        console.log(typeof(currentDayFormatted))
        console.log(typeof(dateTest))
    })
}