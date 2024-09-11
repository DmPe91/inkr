const swiper = new Swiper('.swiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
  pagination: {
el: '.swiper-pagination',
clickable: true,
},
navigation: {
  nextEl: '.swiper-button-next--custom',
  prevEl: '.swiper-button-prev--custom',
  },
  
  breakpoints : {
    480 : {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next--custom',
        prevEl: '.swiper-button-prev--custom',
        }, 
    
      },
    on: {
      init: function loopBagFix(swiper){
          /* 1. Add a copy of the slides */
          const slides = swiper.slides
          const wrapper = swiper.wrapperEl
          slides.forEach( (slide) => {wrapper.append(slide.cloneNode(true))} )
          /* 2. Remove the duplicated pagination */
          setTimeout(() => {
              const paginations = swiper.pagination.bullets
              paginations.forEach((pagination, index) => {
                  if(index > (paginations.length / 2) - 1){
                      pagination.remove()
                  }
              })
          },100) 
      },
    }
      
})
 
 
 
 
 


 
 // loop: true,
  









  
  
  
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
















const swiper_2 = new Swiper(".swiper-offer",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 500,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next--custom',
        prevEl: '.swiper-button-prev--custom',
      },
})