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

