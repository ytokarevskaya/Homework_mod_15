function pageLoaded() {
btn = document.querySelector('.j-btn-screen')
const screenWidth = window.screen.width
const screenHeight = window.screen.height

btn.addEventListener('click', () => {
    alert(`Ширина экрана ${screenWidth}\nВысота экрана ${screenHeight}`)
})
}

document.addEventListener("DOMContentLoaded", pageLoaded)