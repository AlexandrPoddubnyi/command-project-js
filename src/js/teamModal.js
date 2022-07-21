const teamBtnEl = document.querySelector('.modal-btn');
const bodyEl = document.querySelector('body');
const modalEl = document.querySelector('.team-modal-wraper');
const modalBtnEl = document.querySelector('.teamModal-btn');
teamBtnEl.addEventListener('click', onModalOpen);
modalBtnEl.addEventListener('click', onModalClose);
function onModalOpen(e){
    bodyEl.style.overflow = 'hidden';
    modalEl.style.display ='flex';
    window.scrollTo({
        top: 0,
      })
}
function onModalClose(e){
    bodyEl.style.overflow = 'scroll';
    modalEl.style.display ='none';
}