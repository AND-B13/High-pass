const tabsList = document.querySelectorAll('.projects__list');

if (tabsList) {
  const tabsBtn = document.querySelectorAll('.tabs-nav__btn');

  tabsBtn.forEach(element => {
    element.addEventListener('click', (e) => {
      const path = e.currentTarget.dataset.path;

      tabsBtn.forEach(btn => {
        btn.classList.remove('tabs-nav__btn--active');
      });

      e.currentTarget.classList.add('tabs-nav__btn--active');

      tabsList.forEach(element => {
        element.classList.remove('projects__list--active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('projects__list--active');
    });
  });
}



