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