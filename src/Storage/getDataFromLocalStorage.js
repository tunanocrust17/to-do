export default function getDataFromLocalStorage(data) {
    let parsed = JSON.parse(localStorage.getItem(data));
    return parsed;
    
}