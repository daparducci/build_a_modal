let inputElem = document.getElementById("searchInput");

let allNamesDOMCollection = document.getElementsByClassName("name");




/* Handle Functions */
inputElem.addEventListener("keyup", (e) => {
    let searchQuery = e.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name");

    for (let i=0; i<allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLowerCase();
        if(currentName.includes(searchQuery)) {
            allNamesDOMCollection[i].style.display = 'block';
        }
        else {
            allNamesDOMCollection[i].style.display = 'none';
        }
    }
})