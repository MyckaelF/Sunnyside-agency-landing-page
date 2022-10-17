const menuHamburger = document.querySelector('.hamburgerMenu')
const menu = document.querySelector('.navigation')

menuHamburger.onclick = () => {
    menu.classList.toggle('active')
}