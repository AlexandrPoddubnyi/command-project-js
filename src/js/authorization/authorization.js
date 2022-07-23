// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, getRedirectResult, signInWithPopup } from "firebase/auth";

const googleLogin = document.querySelector("[google-auth]")
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqavfTUZDSNfAodjIsIbayLlfSMG5TINA",
  authDomain: "command-project-js-26372.firebaseapp.com",
  projectId: "command-project-js-26372",
  storageBucket: "command-project-js-26372.appspot.com",
  messagingSenderId: "496388065767",
  appId: "1:496388065767:web:a660a7b4d3c6a2974a5542"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider(app);

const auth = getAuth(app)

googleLogin.addEventListener('click', (event) => {
  event.preventDefault()

  /*signInWithRedirect(auth, provider)
  
  getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    
    successAuth(user.email)
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });*/

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(`Thanks for your authorization ${user.email}`)
    document.querySelector("[auth-modal]").classList.add('is-hidden')
    //successAuth(user.email)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})