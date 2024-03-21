import {format} from 'date-fns'

export default function currentDay(){

const date = new Date();
const formattedDate = format(date, 'PPPP');

let dateDiv = document.querySelector('.date');
dateDiv.innerHTML = `Today is ${formattedDate}`

console.log(`Today is ${formattedDate}`)
}