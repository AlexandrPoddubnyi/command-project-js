(() => {
  const refs = {
    modal: document.querySelector("[cabinet-modal]"),
  };

  document.querySelector('.header__top').addEventListener('click', (event) => {
    if (document.querySelector("[cabinet-modal-open]") != null) {
      document.querySelector("[cabinet-modal-open]").addEventListener("click", toggleModal);
      document.querySelector("[cabinet-modal-close]").addEventListener("click", toggleModal);    
    }  
  })

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();