function moreInfo() {
  const brandsLink = document.querySelector('.brands__link');
  const servicesLink = document.querySelector('.services__link');
  const aboutLink = document.querySelector('.about__link');
  const brandsList = document.querySelector('.brands__list');
  const servicesList = document.querySelector('.services__list');
  const aboutText = document.querySelector('.about__text');

  const brandsLinkClass = 'brands__link--hide';
  const servicesLinkClass = 'services__link--hide';
  const brandsListClass = 'brands__list--full';
  const servicesListClass = 'services__list--full';

  function readMore() {
    aboutLink.addEventListener('click', () => {
      aboutLink.classList.toggle('about__link--hide');
      aboutLink.textContent = aboutLink.textContent === 'Читать далее' ? 'Скрыть' : 'Читать далее';
      aboutText.classList.toggle('about__text--full');
    });
  }
  readMore();

  function showMore(link, info, linkClass, listClass) {
    link.addEventListener('click', () => {
      link.classList.toggle(linkClass);
      link.textContent = link.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
      info.classList.toggle(listClass);
    });
  }

  showMore(brandsLink, brandsList, brandsLinkClass, brandsListClass);
  showMore(servicesLink, servicesList, servicesLinkClass, servicesListClass);
}

export default moreInfo;
