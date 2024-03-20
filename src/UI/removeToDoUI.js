export default function removeToDoUI(){
        //removes an to do items that are currently shown
        let childDiv = document.querySelectorAll('.todo-box');
        
        if (childDiv != null){
        childDiv.forEach((item)=>{
            item.remove();
            })
        }
}