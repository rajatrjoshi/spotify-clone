import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2u3Mb-uS3TaDv6jK4HtH5Pvw_GXGee7M",
    authDomain: "spotify-clone-249f3.firebaseapp.com",
    projectId: "spotify-clone-249f3",
    storageBucket: "spotify-clone-249f3.appspot.com",
    messagingSenderId: "95563224758",
    appId: "1:95563224758:web:c0046c109265335a2f7817",
    measurementId: "G-48M572DHRR"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);