// Firestore

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let user = 0;

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

            document.getElementById('article').innerHTML = article.length
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

            document.getElementById('categorie').innerHTML = article.length
        })
        .catch((error) => {
            console.error("Error getting documents: ", error);
        });
}

let tableau = document.getElementById('selectArticle')

async function getData() {
    const querySnapshot = await getDocs(collection(db, 'articles'));
    let article = [];
    querySnapshot.forEach(doc => {
        article.push(doc.data())
        
        
    });
    for (let i = 0; i < article.length; i++) {
        const element = article[i];
        tableau.innerHTML += `
                                <option value="">${element.Nom}</option>
                            `
        // console.log(element[i]);
    }
    console.log(article);
   
    // console.log(users);
}
getData();



document.getElementById('category-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    let categoryName = document.getElementById('categoryName').value;
    let categoryProduct = document.getElementById('categoryProduct').value;
    // let dates = document.getElementById('dates').value;

    try {
        const docRef = await addDoc(collection(db, "UserAutList"), {
            categoryName: categoryName,
            categoryProduct: categoryProduct,
        });
        let idUser = docRef.id
        console.log("Document written with ID: ", idUser);
        alert('Bravo ca marche')
    } catch (error) {
        console.error("Error writing document:", error);
    }
});




window.onload = getAllDataOnce;


























// var categories = [];

// function displayCategory() {
//     var categoryListDiv = document.getElementById("category-list");
//     categoryListDiv.innerHTML = "";

//     categories.forEach(function(category, index) {
//         var categoryDiv = document.createElement("div");
//         categoryDiv.className = "col-lg-4 col-md-6 mb-4";
//         categoryDiv.innerHTML = `
//             <div class="card">
//                 <img src="${category.photo}" class="card-img-top" alt="${category.name}">
//                 <div class="card-body">
//                     <h5 class="card-title text-center">${category.name}</h5>
//                     <p class="card-text text-center">${category.price} CFA</p>
//                     <button class="  m-auto  add" onclick="Look()">Ajouter</button>
//                     <div class="d-flex justify-content-between mt-3">
//                     <button class=" add" onclick="modifyCategory(${index})">Modifier</button>
//                     <button class="add" onclick="deleteCategory(${index})">Supprimer</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         categoryListDiv.appendChild(categoryDiv);
//     });
// }
// function Look() {
//     window.location.href = "file:///C:/Users/Lenovo/Documents/Bakeli/Javascript/T%C3%A2che-de-Validation-Javascript/validation-JS/achats.html"
// }        
// function addCategory() {
//     var name = document.getElementById("categoryName").value;
//     var price = parseFloat(document.getElementById("categoryPrice").value);
//     var imageInput = document.getElementById("categoryImage");
//     var image = imageInput.files[0];
//     if (name && !isNaN(price) && image) {
//         var newCategory = {
//             name: name,
//             price: price,
//             photo: URL.createObjectURL(image)
//         };

//         categories.push(newCategory);
//         displayCategory();
//         document.getElementById("category-form").reset();
//     } else {
//         alert("Please remplissez les champs");
//     }
// }

// function modifyCategory(index) {
//     var newName = prompt("Entrer la nouvelle catégorie:", categories[index].name);
//     if (newName !== null) {
//       categories[index].name = newName;
//       displayCategory();
//     }
// }
// function deleteCategory(index) {
//     var confirmDelete = confirm("Etes-vous sûr de vouloir supprimer cette catégorie");
//     if (confirmDelete) {
//         categories.splice(index, 1);
//         displayCategory();
//    }
// }
// displayCategory();
