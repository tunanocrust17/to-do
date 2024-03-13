import './styles/styles.css'
import createNewProjectUI from './UI/createNewProjectUI';
import addProjectButton from './UI/newProjectBtn';
import submitProjectBtn from './UI/submitProjectBtn';
import addToDoButton from './UI/newToDoBtn';
import readProject from './CRUD/readProject';

export default function init(){
    createNewProjectUI();
    addProjectButton();
    addToDoButton();
    submitProjectBtn();
    readProject();
}