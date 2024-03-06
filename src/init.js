import './styles/styles.css'
import addProject from './CRUD/createNewProject'
import submitProjectBtn from './submitProjectBtn';
import chooseProject from './UI/readProjectUI';

export default function init(){
    addProject();
    submitProjectBtn();
    chooseProject();
}