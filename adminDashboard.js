// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
// // TODO: Add SDKs for Firebase products that you want to use

// // https://firebase.google.com/docs/web/setup#available-libraries

// import { getDatabase, set, ref, get, child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAWpBSXZ0zYov-GkuQRl5vfiq9V6UkfsDE",
//     authDomain: "validation-js-2024.firebaseapp.com",
//     databaseURL: "https://validation-js-2024-default-rtdb.firebaseio.com",
//     projectId: "validation-js-2024",
//     storageBucket: "validation-js-2024.appspot.com",
//     messagingSenderId: "565787116440",
//     appId: "1:565787116440:web:d6eb3365dbd8c71d70a1ed",
//     measurementId: "G-E3S1WFF6H2"
// };

// // Initialize Firebase


// const app = initializeApp(firebaseConfig);

// const db = getDatabase();
// const auth = getAuth(app);
// const dbref = ref(db);




import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyAWpBSXZ0zYov-GkuQRl5vfiq9V6UkfsDE",
    authDomain: "validation-js-2024.firebaseapp.com",
    databaseURL: "https://validation-js-2024-default-rtdb.firebaseio.com",
    projectId: "validation-js-2024",
    storageBucket: "validation-js-2024.appspot.com",
    messagingSenderId: "565787116440",
    appId: "1:565787116440:web:d6eb3365dbd8c71d70a1ed",
    measurementId: "G-E3S1WFF6H2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const UserAutList = collection(db, "UserAutList")


import { doc, getDoc } from "firebase/firestore";

const docRef = doc(db, "UserAutList");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
} else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
}
