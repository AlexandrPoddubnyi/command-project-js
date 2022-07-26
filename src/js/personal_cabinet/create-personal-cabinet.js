export default function createPersonalCabinet(userSymbol) {
    const header = document.querySelector('.header__top')

    const personalCabinet = document.createElement('button')
    personalCabinet.classList.add('personal-cabinet')
    personalCabinet.classList.add('header__item')
    personalCabinet.setAttribute('cabinet-modal-open','')

    const userP = document.createElement('p')

    userP.classList.add('user-parag')
    userP.innerHTML = `${userSymbol}`

    personalCabinet.appendChild(userP)
   
    header.appendChild(personalCabinet)
}
