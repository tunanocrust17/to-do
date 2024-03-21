import './styles/styles.css'
import createNewProjectUI from './UI/createNewProjectUI';
import addProjectButton from './UI/newProjectBtn';
import submitProjectBtn from './UI/submitProjectBtn';
import addToDoButton from './UI/newToDoBtn';
import submitToDoBtn from './UI/submitToDoBtn';
import readProject from './CRUD/readProject';
import readAllProjectsUI from './UI/readAllProjectsUI';
import readImportantProjectUI from './UI/readImportantProjectUI';

export default function init(){
    createNewProjectUI();
    addProjectButton();
    addToDoButton();
    submitProjectBtn();
    submitToDoBtn();
    readProject();
    readAllProjectsUI();
    readImportantProjectUI();
}