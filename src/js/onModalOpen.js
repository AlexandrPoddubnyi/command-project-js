const teamBtnEl = document.querySelector('.modal-btn');
const bodyEl = document.querySelector('body');
const modalEl = document.querySelector('.team-modal-wraper');
const modalBtnEl = document.querySelector('.teamModal-btn');
const modalBackDrop = document.querySelector('.team-modal-wraper')
teamBtnEl.addEventListener('click', onModalOpen);
modalBtnEl.addEventListener('click', onModalClose);
function onModalOpen(e){
    bodyEl.style.overflow = 'hidden';
    modalEl.style.display ='flex';
    window.addEventListener('keydown', keydownOpen);
    modalBackDrop.addEventListener('click', onBackDropclose)
};
function onModalClose(e){
    bodyEl.style.overflow = 'scroll';
    modalEl.style.display ='none';
    window.removeEventListener('keydown', keydownOpen, false);
    modalBackDrop.removeEventListener('click', onBackDropclose, false);
};
function keydownOpen(e){
    if(e.key === 'Escape'){
        onModalClose();
    }
    console.log(e.key);
    console.log(e.code);
}
function onBackDropclose(e){
    if(e.target === modalBackDrop){
        onModalClose();
    }
    console.log(e.target);
}