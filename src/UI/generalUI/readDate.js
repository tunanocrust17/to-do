import {format, parse} from 'date-fns'

export default function currentDay(){

const date = new Date();
const formattedDate = format(date, 'PPPP');

let dateDiv = document.querySelector('.date');
dateDiv.innerHTML = `Today is ${formattedDate}`

const parsedDate = parse(formattedDate, 'PPPP', new Date());
console.log(`Today is ${formattedDate}`)
console.log(parsedDate)
}