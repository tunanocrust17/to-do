export default function removeProjectContainer() {
    const projectContainer = document.querySelectorAll('.project-container');

    projectContainer.forEach((item)=>{
        item.remove()
    })

}