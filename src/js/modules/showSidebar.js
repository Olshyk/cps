function showSidebar() {
  const menu = document.querySelector('.button--menu');
  const sidebar = document.querySelector('.sidebar');
  const overlay = document.querySelector('.overlay');
  const close = sidebar.querySelector('.button--close');

  function open() {
    menu.addEventListener('click', () => {
      overlay.classList.add('overlay--visible');
      sidebar.classList.add('sidebar--active');
    });

    close.addEventListener('click', () => {
      sidebar.classList.remove('sidebar--active');
      overlay.classList.remove('overlay--visible');
    });

    overlay.addEventListener('click', () => {
      sidebar.classList.remove('sidebar--active');
      overlay.classList.remove('overlay--visible');
    });
  }

  open();
}

export default showSidebar;
