const toggle_button = document.getElementsByClassName('toggle-button')[0]
toggle_button.addEventListener('click', () =>{
    const navbar_nav = document.getElementsByClassName('navbar-nav')[0]
    const navbar = document.getElementsByClassName('navbar')[0]
    navbar_nav.classList.toggle('active')
    navbar.classList.toggle('active')
})
window.addEventListener('scroll', ()=>{
    const navbar = document.getElementsByClassName('navbar')[0]
    const gotop_btn = document.getElementsByClassName('gotop-btn')[0]
    navbar.classList.toggle('sticky', window.scrollY > 0)
    gotop_btn.classList.toggle('show', window.scrollY > 0)

})
window.addEventListener('load', ()=>{
    const intro = document.getElementsByClassName('intro-bg')[0]
    const preloader = document.getElementById('preloader')
    intro.style.display = 'block'
    preloader.style.display = 'none'

})

