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