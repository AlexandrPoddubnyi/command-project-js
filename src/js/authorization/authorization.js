// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, TwitterAuthProvider, FacebookAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import Notiflix from "notiflix";

const googleLogin = document.querySelector("[google-auth]")
const twitterLogin = document.querySelector("[twitter-auth]")
const facebookLogin = document.querySelector("[facebook-auth]")
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
const twitterProvider = new TwitterAuthProvider(app);
const facebookProvider = new FacebookAuthProvider(app)

const auth = getAuth(app)

googleLogin.addEventListener('click', (event) => {
  event.preventDefault()

  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    Notiflix.Notify.success(`Thanks for your authorization ${user.email}`)
    document.querySelector("[auth-modal]").classList.add('is-hidden')
    //successAuth(user.email)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    Notiflix.Notify.failure(errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
})

twitterLogin.addEventListener('click', (event) => {
  event.preventDefault()

  signInWithPopup(auth, twitterProvider)
  .then((result) => {
    // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
    // You can use these server side with your app's credentials to access the Twitter API.
    const credential = TwitterAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const secret = credential.secret;

    // The signed-in user info.
    const user = result.user;

    Notiflix.Notify.success(`Thanks for your authorization ${user.displayName}`)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    Notiflix.Notify.failure(errorMessage)
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = TwitterAuthProvider.credentialFromError(error);
    // ...
  });
})

facebookLogin.addEventListener('click', (event) => {
  event.preventDefault()

  signInWithPopup(auth, facebookProvider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    Notiflix.Notify.success(`Thanks for your authorization ${user.displayName}`)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    Notiflix.Notify.failure(errorMessage)
    // ...
  });
})