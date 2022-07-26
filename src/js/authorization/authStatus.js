import createPersonalCabinet from "../personal_cabinet/create-personal-cabinet";
import modalFill from "../personal_cabinet/cabinet-modal";

function authStatus() {
    
    const settings = JSON.parse(localStorage.getItem('auth'))
    if (settings.auth === true) {
        console.log('+')
        createPersonalCabinet(settings.email[0].toUpperCase())

        document.querySelector('[auth-modal-open]').remove()
        document.querySelector("[auth-modal]").classList.add('is-hidden')

        modalFill(settings.email[0].toUpperCase(), settings.email)
    }
}

authStatus()