const btnClose = document.querySelector('.location-map__btn-close');
const curtain = document.querySelector('.location-map__wrapper');
btnClose.addEventListener('click', () => {
  curtain.classList.add('is-hidden');
})
