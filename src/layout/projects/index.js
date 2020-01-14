import './projects.sass';
import Swiper from 'swiper/js/swiper.min.js';


var swiperContent = new Swiper('.swiper_content', {
  direction: 'vertical',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

var swiperTro = new Swiper('.swipertop', {
  initialSlide: 1,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

var swiperBottom = new Swiper('.swiperbottom', {
  initialSlide: 1,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});