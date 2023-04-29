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
  navigation: {
    nextEl: '.swiper-button-right',
    prevEl: '.swiper-button-left',
  },
  pagination: {
    el: '.swiper-pagination',
    type: "fraction",
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1060: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});

// function accordion() {
//   document.querySelector('.accordion__item').classList.add('opened')
//   document.querySelectorAll('.accordion__item').forEach(function (section) {
//     section.addEventListener('click', function (e) {
//       document.querySelectorAll('.accordion__item').forEach(function (section) {
//         section.classList.remove('opened')
//       })
//       e.target.closest('.accordion__item').classList.toggle('opened')
//     })
//   })
// }
// accordion();

// var text = document.getElementById("inputText");
// var btn = document.getElementById("copyText");
// btn.onclick = function () {
//   text.select();
//   document.execCommand("copy");
//   alert("Скопированный адрес: " + text.value);
// }

const btnMore = document.querySelector('.more-btn');
const cards = Array.from(document.querySelectorAll('.video-control__room'));

function openCatalog() {
  btnMore.addEventListener('click', () => {
    cards.forEach(item => item.classList.remove('hidden'));
    btnMore.classList.add('hidden');
  })
}

function response() {
  if (window.innerWidth > 670) {

    cards.forEach((item, index) => {
      item.classList.add('hidden')
      if (index <= 8) {
        item.classList.remove('hidden')
      } else if (index > 8) {
        btnMore.classList.remove('hidden');
      }
      openCatalog()
    })
  }
}
response()
