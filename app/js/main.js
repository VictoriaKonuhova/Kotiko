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

function accordeon() {
  document.querySelector('.accordeon__item').classList.add('opened')
  document.querySelectorAll('.accordeon__item').forEach(function(section){
    section.addEventListener('click', function (e) {
      document.querySelectorAll('.accordeon__item').forEach(function(section) {
        section.classList.remove('opened')
      })
      e.target.closest('.accordeon__item').classList.toggle('opened')
    })
  })
}
accordeon();