function showModal() {
  const feedback = document.querySelectorAll('.button--feedback');
  const call = document.querySelectorAll('.button--call');
  const modalFeedback = document.getElementById('modal-feedback');
  const modalCall = document.getElementById('modal-call');
  const overlay = document.querySelector('.overlay');
  const sidebar = document.querySelector('.sidebar');
  const fieldName = document.getElementById('name');
  const fieldTel = document.getElementById('tel2');

  function dialog(button, modal) {
    button.addEventListener('click', () => {
      overlay.classList.add('overlay--visible');
      modal.classList.add('modal--open');
      sidebar.classList.remove('sidebar--active');
      fieldName.focus();
      fieldTel.focus();
    });

    const close = modal.querySelector('.button--close');

    close.addEventListener('click', () => {
      modal.classList.remove('modal--open');
      overlay.classList.remove('overlay--visible');
    });

    overlay.addEventListener('click', () => {
      modal.classList.remove('modal--open');
      overlay.classList.remove('overlay--visible');
    });
  }

  for (let i = 0; i < feedback.length; i++) {
    dialog(feedback[i], modalFeedback);
  }
  for (let i = 0; i < call.length; i++) {
    dialog(call[i], modalCall);
  }
}

export default showModal;
