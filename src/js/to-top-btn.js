const toTopButton = document.querySelector('.to-top-btn');

toTopButton.addEventListener("click", backToTop);
window.addEventListener("scroll", showToTopButton);

function showToTopButton() {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    toTopButton.classList.remove('is-hidden');
  } else {
    toTopButton.classList.add('is-hidden');
  }
}

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}