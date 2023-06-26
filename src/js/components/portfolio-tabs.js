// Пример написания модульного кода.

const portfolioTabsNav = document.querySelector('.portfolio-tabs-nav');

if (portfolioTabsNav) {
  const portfolioTabsButtons = document.querySelectorAll('.portfolio-tabs-nav__button');
  const portfolioTabsItems = document.querySelectorAll('.portfolio-tabs__item');
  const portfolioTabsVisible = document.querySelectorAll('.portfolio-tabs__item--visible');
  const loadMoreButton = document.querySelector('.portfolio-more');
  const maxItems = 9;

  function isLoadMoreNeeded(selector) {
    if (selector.length <= maxItems) {
      loadMoreButton.style.display = 'none';
    } else {
      loadMoreButton.style.display = 'inline-flex';
    }
  }

  function hideMoreItems(selector) {
    if (selector.length > maxItems) {
      const arr = Array.from(selector);
      const hiddenItems = arr.slice(maxItems, selector.length)

      hiddenItems.forEach(element => {
        element.classList.remove('portfolio-tabs__item--visible');
        element.classList.remove('portfolio-tabs__item--visible-more');
      })
    }
  }

  portfolioTabsNav.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains('portfolio-tabs-nav__button')) {
      const path = target.dataset.path;

      portfolioTabsButtons.forEach(element => {
        element.classList.remove('portfolio-tabs-nav__button--active');
      })

      target.classList.add('portfolio-tabs-nav__button--active');

      portfolioTabsItems.forEach(element => {
        element.classList.remove('portfolio-tabs__item--visible');
        element.classList.remove('portfolio-tabs__item--visible-more');
      })

      document.querySelectorAll(`[data-target="${path}"]`).forEach(element => {
        element.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible');
      })

      isLoadMoreNeeded(document.querySelectorAll(`[data-target="${path}"]`));
      hideMoreItems(document.querySelectorAll('.portfolio-tabs__item--visible'));

      if (path === 'all') {

        portfolioTabsItems.forEach(element => {
          element.classList.add('portfolio-tabs__item--visible');
        })

        isLoadMoreNeeded(document.querySelectorAll('.portfolio-tabs__item--visible'));
        hideMoreItems(document.querySelectorAll('.portfolio-tabs__item--visible'));
      }
    }
  });

  hideMoreItems(portfolioTabsItems);
  isLoadMoreNeeded(portfolioTabsVisible);

  loadMoreButton.addEventListener('click', (e) => {
    const visibleItems = document.querySelectorAll('.portfolio-tabs__item--visible');
    const path = document.querySelector('.portfolio-tabs-nav__button--active').dataset.path;

    if (path === 'all') {
      portfolioTabsItems.forEach(element => {
        element.classList.add('portfolio-tabs__item--visible-more');
        loadMoreButton.style.display = 'none';
      })
    } else {
      document.querySelectorAll(`[data-target="${path}"]`).forEach(element => {
        element.closest('.portfolio-tabs__item').classList.add('portfolio-tabs__item--visible-more');
      })
      loadMoreButton.style.display = 'none';
    }

  });
}
