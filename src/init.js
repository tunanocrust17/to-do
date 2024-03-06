import './styles/styles.css'
import createNewProject from './CRUD/createNewProject'
import addProjectButton from './UI/newProjectBtn';
import submitProjectBtn from './UI/submitProjectBtn';
import chooseProject from './UI/readProjectUI';

export default function init(){
    createNewProject();
    addProjectButton()
    submitProjectBtn();
    chooseProject();
}