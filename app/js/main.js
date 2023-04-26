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

function accordion() {
  document.querySelector('.accordion__item').classList.add('opened')
  document.querySelectorAll('.accordion__item').forEach(function(section){
    section.addEventListener('click', function (e) {
      document.querySelectorAll('.accordion__item').forEach(function(section) {
        section.classList.remove('opened')
      })
      e.target.closest('.accordion__item').classList.toggle('opened')
    })
  })
}
accordion();

var text = document.getElementById("inputText");
var btn = document.getElementById("copyText");
btn.onclick = function () {
  text.select();
  document.execCommand("copy");
  alert("Скопированный адрес: " + text.value);
}
