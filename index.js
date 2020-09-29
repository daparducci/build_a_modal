openModalBtn = document.getElementById("open-modal");
closeModalBtn = document.getElementById("close-modal");
overlay = document.getElementById("overlay");


openModalBtn.addEventListener("click", () => {
    overlay.style.display = 'block';
})

closeModalBtn.addEventListener("click", () => {
    overlay.style.display = 'none';
})

