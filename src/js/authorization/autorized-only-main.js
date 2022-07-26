function mainAuthorizedOnly() {
  const libLink = document.querySelector('[lib-link]')
  
  if (JSON.parse(localStorage.getItem('auth')).auth != true) {
    libLink.classList.add('pointer-none')
    console.log('+')
  }
  else {
    libLink.classList.remove('pointer-none')
  }
}

mainAuthorizedOnly()