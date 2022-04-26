import Swiper, { Pagination } from 'swiper';

Swiper.use([Pagination]);

const swiper = () => {
  function initSlider() {
    new Swiper('.swiper-brands', {
      loop: true,
      slidesPerView: 1.25,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        400: {
          slidesPerView: 1.5,
        },

        540: {
          slidesPerView: 2.25,
        },
      },
    });

    new Swiper('.swiper-device', {
      loop: true,
      slidesPerView: 1.25,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        400: {
          slidesPerView: 1.5,
        },
        540: {
          slidesPerView: 2.25,
        },
      },
    });

    new Swiper('.swiper-price', {
      loop: true,
      slidesPerView: 1.18,
      spaceBetween: 16,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        400: {
          slidesPerView: 1.35,
        },
        600: {
          slidesPerView: 2.18,
        },
      },
    });
  }

  if (window.innerWidth < 768) {
    initSlider();
  }
};

export default swiper;
