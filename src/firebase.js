import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

//THIS IS CONSIDERED AS AUTH. TO LOG IN TO YOUR FIREBASE ACCOUNT
const firebaseConfig = {
    apiKey: "AIzaSyCX_tbgGQss68QwO1iBE3UtvHVro_ByhDo",
    authDomain: "netflix-clone-36810.firebaseapp.com",
    projectId: "netflix-clone-36810",
    storageBucket: "netflix-clone-36810.appspot.com",
    messagingSenderId: "437996977467",
    appId: "1:437996977467:web:b4cc62df930a99dab30b1e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  //USED TO SIGN-IN AND SIGN-UP VIA FIREBASE
  const auth = firebase.auth();

  export { auth };
  export default db;