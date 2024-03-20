import getDataFromLocalStorage from "../Storage/getDataFromLocalStorage";
import setDataToLocalStorage from "../Storage/setDataToLocalStorage";

export default function deleteProject(){
    let deleteButton = document.querySelector('.delete-button');
    
    deleteButton.addEventListener('click',(e)=>{

        let oldData = getDataFromLocalStorage('todo');

        let projectID = e.target.getAttribute('listid');
        let index = oldData.map((item)=>item.id).indexOf(projectID);
        
        oldData.splice(index,1);
        setDataToLocalStorage('todo', oldData)
        location.reload();
    })
}