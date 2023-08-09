const home = document.getElementById('home')
const downArrow = document.getElementById('down-arrow')

downArrow.addEventListener("click", () => {
    home.scrollIntoView()
})
