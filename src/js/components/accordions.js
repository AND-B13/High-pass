// Пример подключения cdn библиотеки

import myAccordion from '../vendor/accordion.js';

const accordionWeOffer = document.querySelector('.we-offer');

if (accordionWeOffer) {
const accordionWeOfferOne = new myAccordion('.accordion-1', {
  speed: 500,
})

const accordionWeOfferTwo = new myAccordion('.accordion-2', {
  speed: 500,
})
}
