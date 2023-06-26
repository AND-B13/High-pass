// пример подключения npm (подробнее файл _functions)
import _vars from '../_vars';
import Swiper, { Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

const bodyStyle = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyle.getPropertyValue('--grid-gap'));

const portfolioSlider = new Swiper('.portfolio-section__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
    navigation: {
    nextEl: '.portfolio-section__next',
    prevEl: '.portfolio-section__prev',
  },
});

const testimonialsSlider = new Swiper('.testimonials__items', {
  slidesPerView: 1,
  spaceBetween: gap,
  loop: true,
    navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },
});

const relatedProjectsSlider = new Swiper('.related-projects__items', {
  slidesPerView: 3,
  spaceBetween: gap,
  loop: true,
    navigation: {
    nextEl: '.related-projects__next',
    prevEl: '.related-projects__prev',
  },
});
