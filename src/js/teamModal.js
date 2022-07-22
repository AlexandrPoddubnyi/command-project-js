const teamBtnEl = document.querySelector('.modal-btn');
const bodyEl = document.querySelector('body');
const modalEl = document.querySelector('.team-modal-wraper');
const modalBtnEl = document.querySelector('.teamModal-btn');
teamBtnEl.addEventListener('click', onModalOpen);
modalBtnEl.addEventListener('click', onModalClose);
function onModalOpen(e){
    bodyEl.style.overflow = 'hidden';
    modalEl.style.display ='flex';
    window.addEventListener('keydown', keydownOpen)
};
function onModalClose(e){
    bodyEl.style.overflow = 'scroll';
    modalEl.style.display ='none';
    window.removeEventListener('keydown', keydownOpen, false);
};
function keydownOpen(e){
    if(e.key = "Escape"){
        onModalClose();
    }
}