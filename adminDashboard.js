// Firestore

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let user = 0;
let tbody = document.getElementById('tbody');
function addItemToTable(prenom, nom, email, action) {
let trow = document.createElement('tr');
// let td1 = document.createElement('td');
let td2 = document.createElement('td');
let td3 = document.createElement('td');
let td4 = document.createElement('td');
let td5 = document.createElement('td');

// td1.innerHTML = ++user;
td2.innerHTML = prenom;
td3.innerHTML = nom;
td4.innerHTML = email;
td5.innerHTML = action;

// trow.appendChild(td1);
trow.appendChild(td2);
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);

td5.innerHTML = `<i class="bi bi-eye"></i> <i class="bi bi-trash3" id="test" "></i>`

tbody.appendChild(trow);

// Ajoute un écouteur d'événements sur le tableau lui-même
tbody.addEventListener('click', function (event) {
    // Vérifie si l'élément cliqué est une icône de corbeille
    if (event.target.classList.contains('bi-trash3')) {
        // Supprime la ligne parente de l'icône de corbeille
        let rowToRemove = event.target.closest('tr');
        rowToRemove.remove();
    }
});

}


function addAllItemToTable(users) {
    user = 0;
    tbody.innerHTML = '';
    users.forEach(element => {
        addItemToTable(element.firstname, element.lastname, element.email, element.action);
    });
}


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

// Initialize Firestore

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);


// Firestore

function getAllDataOnce() {
    const userAutListRef = collection(db, 'UserAutList');
    getDocs(userAutListRef)
        .then((querySnapshot) => {
            let utilisateurs = [];

            querySnapshot.forEach((doc) => {
                utilisateurs.push(doc.data());
            });

            addAllItemToTable(utilisateurs);
            
            // recuperation nombre d'utilisateurs
            document.getElementById('client').innerHTML = utilisateurs.length
            })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });
    const userArticletRef = collection(db, 'articles');
    getDocs(userArticletRef)
        .then((querySnapshot) => {
            let article = [];

            querySnapshot.forEach((doc) => {
                article.push(doc.data());
            });

            // addAllItemToTable(utilisateurs);

            // recuperation nombre d'utilisateurs
            document.getElementById('article').innerHTML = article.length
            // document.getElementById('clients').innerHTML = utilisateurs.length
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });

    const userCategorietRef = collection(db, 'Categories');
    getDocs(userCategorietRef)
        .then((querySnapshot) => {
            let article = [];

            querySnapshot.forEach((doc) => {
                article.push(doc.data());
            });

            // addAllItemToTable(utilisateurs);

            // recuperation nombre d'utilisateurs
            document.getElementById('categorie').innerHTML = article.length
            // document.getElementById('clients').innerHTML = utilisateurs.length
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });
}
    document.getElementById('formulaire').addEventListener('submit', async function (e) {
        e.preventDefault();

        let firstname = document.getElementById('firstname').value;
        let lastname = document.getElementById('lastname').value;
        let dates = document.getElementById('dates').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        try {
            const docRef = await addDoc(collection(db, "UserAutList"), {
                firstname: firstname,
                lastname: lastname,
                Date: dates,
                email: email,
                Password: password,
            });
            let idUser = docRef.id
            console.log("Document written with ID: ", idUser);
            alert('Bravo ca marche')
        } catch (error) {
            console.error("Error writing document:", error);
        }
    });
window.onload = getAllDataOnce;

// Regle firestore
// allow read, write: if request.auth != null;


// recuperation des infos sur le sessionStorage
// let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"))
let UserInfo = JSON.parse(sessionStorage.getItem("user-info"))

// let MsgHead = document.getElementById("msg")
let userName = document.getElementById("userName")
let signoutBtn = document.getElementById("signoutbutton")

// function pour la deconnexion et redirection vers la page de connexion
let Signout = () => {
    sessionStorage.removeItem("user-creds")
    sessionStorage.removeItem("user-info")
    window.location.href = 'SignIn.html'
}
// function pour verifier les infos user dans le sessionStorage et afficher les infos sur le DOM  
let CheckCred = () => {
    if (!sessionStorage.getItem("user-creds")) {
        window.location.href = 'SignIn.html'
    } else {
        // MsgHead.innerText = ` Votre Email: ${UserCreds.email}`
        userName.innerHTML = `${UserInfo.lastname + " " + UserInfo.firstname}`
    }
}

window.addEventListener('load', CheckCred);
signoutBtn.addEventListener('click', Signout)