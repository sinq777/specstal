document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.style.filter = 'none'; // Убираем затемнение при наведении
          this.querySelector('a').style.color = '#a3c5f2'; // Меняем цвет текста при наведении
      });

      card.addEventListener('mouseleave', function() {
          this.style.filter = ''; // Возвращаем затемнение при уходе курсора
          this.querySelector('a').style.color = '#ffffff'; // Возвращаем изначальный цвет текста при уходе курсора
      });
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');

  serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
          this.classList.add('hovered'); // Добавляем класс при наведении
      });

      card.addEventListener('mouseleave', function() {
          this.classList.remove('hovered'); // Удаляем класс при уходе курсора
      });
  });
});

var swiper = new Swiper(".mySwiper", {
spaceBetween: 30,
autoplay:{
  delay: 2000,
  disableOnInteraction: true,
},
slidesPerView: 3,
centeredSlides: true,
loop: true,
spaceBetween: 40,

effect: 'coverflow',
  coverflowEffect: {
    slideShadows: false,
    modifier: 1,
    rotate: 20,

  },

  breakpoints: {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    },
  },
pagination: {
  el: ".swiper-pagination",
},
mousewheel: true,
keyboard: true,
});

document.addEventListener("DOMContentLoaded", function() {
const leftText = document.querySelector('.hero-text.left');
const rightText = document.querySelector('.hero-text.right');

setTimeout(() => {
    leftText.classList.add('visible');
}, 100); // Задержка перед началом анимации для левого текста (например, 500 мс)

setTimeout(() => {
    rightText.classList.add('visible');
}, 100); // Задержка перед началом анимации для правого текста (например, 1000 мс)
});

var backToTopButton = document.getElementById("backToTop");

// Когда пользователь прокручивает вниз 20px от верхней части документа, показываем кнопку
window.onscroll = function() {
scrollFunction();
};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
} else {
    backToTopButton.style.display = "none";
}
}

// Когда пользователь нажимает на кнопку, возвращаемся наверх страницы
function scrollToTop() {
document.body.scrollTop = 0; // Для Safari
document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}
function scrollToTop() {
const c = document.documentElement.scrollTop || document.body.scrollTop;
if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
}
}