const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
});

const swiperG = new Swiper('.swiper__g', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },

});