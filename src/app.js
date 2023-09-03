const swiper = new Swiper('.result-slider', {
    speed: 400,
    spaceBetween: 100,
    // autoplay: {
    //   delay: 5000,
    // },
    navigation: {
      nextEl: '.result-slider .swiper-next',
      prevEl: '.result-slider .swiper-prev',
    },
    // nextButton: '.result-slider .swiper-next',
    // prevButton: '.result-slider .swiper-prev',
    breakpoints: {
      // when window width is >= 320px
      // 320: {
      //   slidesPerView: 2,
      //   spaceBetween: 20
      // },
      // // when window width is >= 480px
      // 480: {
      //   slidesPerView: 3,
      //   spaceBetween: 30
      // },
      // // when window width is >= 640px
      // 640: {
      //   slidesPerView: 4,
      //   spaceBetween: 40
      // }
    }
  });


  // faq


let faq = document.getElementsByClassName("faq-title");
let i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.position === "static") {
            body.style.position = "absolute";
            body.style.opacity = "0";
            body.style.padding = "0";

        } else {
            body.style.position = "static";
            body.style.opacity = "1";
            body.style.padding = " 15px 0 0 0";
        }
    });
}

    // бургер меню

    const icons = document.querySelectorAll('.burger');
    const header = document.querySelector('.menu');
    const body = document.querySelector('body');
    icons.forEach (icon => {  
      icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");
        header.classList.toggle("open");
        
        body.classList.toggle("open");
    
      });
    });
    
    // const elem = document.getElementById('actions-menu-date-calendar');
    // const datepicker = new Datepicker(elem, {
    
    // });
    AOS.init();



    // quiz



// let prev = document.getElementById ('quiz-next');
let submit = document.getElementById("quiz-submit")
let next = document.getElementById ('quiz-next');
let slides = document.getElementsByClassName("form-row");


let slideIndex = 1;
showSlides(slideIndex);

next.addEventListener ("click", function () {
  

  let current_input =  slides[slideIndex-1].querySelector('input')

  if(current_input.value !== ""){
    showSlides(slideIndex += 1)
  }
 
});

// prev.addEventListener ("click", function () {
//   showSlides(slideIndex -= 1);
// });

function currentSlide(n) {
  showSlides(slideIndex = n);
}


function showSlides(n) {
    
    let progres = document.getElementsByClassName("progressbar-item");
    if (n > slides.length - 1) {
      // slideIndex = 1;
      // console.log('close')
      next.style.display = "none"
      submit.style.display = "flex"
    }
    // if (n < 1) {
    //     slideIndex = slides.length;
    // }
 
    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    progres[slideIndex - 1].classList.add("show")    
    slides[slideIndex - 1].style.display = "flex"  
    // console.log(progres[slideIndex - 1])  
  }


  // модальное окно


  document.addEventListener('DOMContentLoaded', function() {
    let modalButtons = document.querySelectorAll('.js-open-modal')
    let   overlay      = document.querySelector('#overlay-modal')
    let   closeButtons = document.querySelectorAll('.js-modal-close')
    
    
    modalButtons.forEach(function(item){
       
       item.addEventListener('click', function(e) {
          
          e.preventDefault();
          var modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
          
          modalElem.classList.add('active');
          overlay.classList.add('active');
          body.classList.add('open')


          
       }); // end click
    }); // end foreach



    closeButtons.forEach(function(item){
      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');
         parentModal.classList.remove('active');
         overlay.classList.remove('active');
         body.classList.remove('open')
      });
    }); // end foreach


 }); // end ready

