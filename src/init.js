import './styles/styles.css'
import createNewProject from './CRUD/createNewProject'
import addProjectButton from './UI/newProjectBtn';
import submitProjectBtn from './UI/submitProjectBtn';
import readProject from './CRUD/readProject';

export default function init(){
    createNewProject();
    addProjectButton()
    submitProjectBtn();
    readProject();
}