import './styles/styles.css'
import createNewProjectUI from './UI/projectUI/createNewProjectUI';
import addProjectButton from './UI/projectUI/newProjectBtn';
import submitProjectBtn from './UI/projectUI/submitProjectBtn';
import addToDoButton from './UI/toDoUI/newToDoBtn';
import submitToDoBtn from './UI/toDoUI/submitToDoBtn';
import readProject from './CRUD/readProject';
import readAllProjectsUI from './UI/generalUI/readAllProjectsUI';
import readImportantProjectUI from './UI/generalUI/readImportantProjectUI';
import currentDay from './UI/generalUI/readDate';
import readTodaysProjectsUI from './UI/generalUI/readTodaysProjectsUI';

export default function init(){
    createNewProjectUI();
    addProjectButton();
    addToDoButton();
    submitProjectBtn();
    submitToDoBtn();
    readProject();
    readAllProjectsUI();
    readImportantProjectUI();
    currentDay();
    readTodaysProjectsUI();
}