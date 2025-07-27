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



// ===========SWIPER HOME======================

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

// ================ SWIPER TESTIMONIAL==================
const swiperTestimonial = new Swiper('.testimonial__swiper', {

  loop: true,
  slidesPerView: 'auto',
  spaceBetween:48,



  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay:{
    delay: 3000,
    disableOnIntraction: false,
  }
})

// ====================SHOW SCROLL UP========================
const scrollUp = () =>{
  const scrollUp =document.getElementById('scroll-up')
  //when the scroll is higher than 350 viewport height, add the show-scroll class to the 
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove("show-scroll")
  
}
window.addEventListener('scroll', scrollUp)

// ================SCROLL SECTIONS ACTIVE LINK====================================
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollDown = window.scrollY
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
          sectionClass.classList.add('active-link')
        }else{
          sectionClass.classList.remove('active-link')
        }

    })
  }

window.addEventListener('scroll', scrollActive)

// ================DARK LIGHT THEME============================

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-fill';

//Previously sselected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We validate the current theme that the intereface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-fill' ;

//we validate if the user previously chose a topic
if(selectedTheme) {
  //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivate
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme);
}

// Activate /deactivate the theme mannually with the button
themeButton.addEventListener('click',() => {
//Add or remove the dark/icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
//we save the theme and the current icon that the uset chose
   localStorage.setItem('selected-theme', getCurrentTheme())
   localStorage.setItem('selected-icon', getCurrentIcon())
})


// =====================SCROLL REVEAL ANIMATION=========================

