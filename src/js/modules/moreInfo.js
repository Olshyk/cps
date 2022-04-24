function moreInfo() {
  const infoLink = document.querySelectorAll('.info__link');
  const aboutLink = document.querySelector('.about__link');
  const infoList = document.querySelectorAll('.info__list');
  const aboutText = document.querySelector('.about__text');

  function readMore() {
    aboutLink.addEventListener('click', () => {
      aboutLink.classList.toggle('about__link--hide');
      aboutLink.textContent = aboutLink.textContent === 'Читать далее' ? 'Скрыть' : 'Читать далее';
      aboutText.classList.toggle('about__text--full');
    });
  }
  readMore();

  function showMore(link, info) {
    link.addEventListener('click', () => {
      link.classList.toggle('info__link--hide');
      link.textContent = link.textContent === 'Показать все' ? 'Скрыть' : 'Показать все';
      info.classList.toggle('info__list--full');
    });
  }
  for (let i = 0; i < infoLink.length; i++) {
    showMore(infoLink[i], infoList[i]);
  }
}

export default moreInfo;
