import firebase from 'firebase'
require('@firebase/firestore')
import "firebase/auth";

var firebaseConfig = {
 
    apiKey: "AIzaSyBMmmc3r-7T-K-V_boUgv1PInmYSjB-miU",
    authDomain: "forum-60c27.firebaseapp.com",
    projectId: "forum-60c27",
    storageBucket: "forum-60c27.appspot.com",
    messagingSenderId: "631696623086",
    appId: "1:631696623086:web:0bf96ad4b1c3287ff6baff"
 
};
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

