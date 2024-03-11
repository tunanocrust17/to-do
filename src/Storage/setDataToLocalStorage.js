export default function setDataToLocalStorage(listName, array) {
    localStorage.setItem(listName, JSON.stringify(array))
}