function menuShow() {
    let menu = document.querySelector('.fa-solid')
    let menuNav = document.querySelector('.mobile-menu')
    if (menu.classList.contains('fa-bars')) {
        menu.classList.remove('fa-bars')
        menu.classList.add('fa-xmark')
        menuNav.classList.add('open')
    } else {
        menu.classList.remove('fa-xmark')
        menu.classList.add('fa-bars')
        menuNav.classList.remove('open')
    }
}