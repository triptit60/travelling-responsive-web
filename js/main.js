// ========== show menu ==============

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')   

//   =====Menu show===========
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// =======Menu hidden=========
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// ======================Remove Menu Mobile==================
const navlink = document.querySelectorAll('.nav__link')

const LinkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // when we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}

navlink.forEach(n => n.addEventListener('click', LinkAction))