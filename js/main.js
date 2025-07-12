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





const swiperHome = new Swiper('.home__swiper', {

  loop: true,
  slidesPerView: 'auto',



  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay:{
  //   delay: 3000,
  //   disableOnIntraction: false,
  // }
})

// =============== CHANGE BACKGROUND HEADER ===========
const bgHeader = () =>{
   const header = document.getElementById('header')
  //add a class if the bottom offset is greater than 50 of the
window.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)