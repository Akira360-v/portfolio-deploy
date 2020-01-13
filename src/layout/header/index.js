import './header.sass';
import Swiper from 'swiper/js/swiper.min.js';


var swiper = new Swiper('.header-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
