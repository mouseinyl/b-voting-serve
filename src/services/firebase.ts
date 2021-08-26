// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAh7qhiwxlGRAQl6iwvz3Yx_0ae__CxeV8",
  authDomain: "b-voting.firebaseapp.com",
  databaseURL: "https://b-voting-default-rtdb.firebaseio.com",
  projectId: "b-voting",
  storageBucket: "b-voting.appspot.com",
  messagingSenderId: "710484162054",
  appId: "1:710484162054:web:efca8482047e1687803587",
  measurementId: "G-09MHLDZGE0",
};

const app = firebase.initializeApp(firebaseConfig);

export { app };
