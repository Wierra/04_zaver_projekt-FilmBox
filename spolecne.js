const menuButton = document.querySelector('#menu-tlacitko')
const menuEl = document.querySelector('#menu-polozky')

menuButton.addEventListener("click", () => {
    if(!menuEl.classList.contains('show')) {
        menuEl.classList.add('show');
        menuButton.innerHTML = `<i class="fas fa-xmark"></i>`
    } else {
        menuEl.classList.remove('show');
        menuButton.innerHTML = `<i class="fas fa-bars"></i>`
    }
}
)