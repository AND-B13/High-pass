const servicesTabsList = document.querySelectorAll('.services__list');
const worksTabsList = document.querySelectorAll('.services-works');

if (servicesTabsList && worksTabsList) {
  const servicesTabsBtn = document.querySelectorAll('.tabs-slider__btn');
  const wrapperBtn = document.querySelector('.tabs-slider');

  servicesTabsBtn.forEach(element => {
    element.addEventListener('click', (e) => {
      const path = e.currentTarget.dataset.path;

      servicesTabsBtn.forEach(btn => {
        btn.classList.remove('tabs-slider__btn--active');
      });

      if (path === "two") {
        wrapperBtn.classList.add('tabs-slider--active');
      } else {
        wrapperBtn.classList.remove('tabs-slider--active');
      }

      e.currentTarget.classList.add('tabs-slider__btn--active');

      servicesTabsList.forEach(tab => {
        tab.classList.toggle('services__list--hidden', tab.dataset.target !== path);
      })

      worksTabsList.forEach(tab => {
        tab.classList.toggle('services-works--hidden', tab.dataset.target !== path);
      })
    })
  })
}
