// Firestore

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getFirestore, collection, getDocs, addDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

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


document.getElementById('product').addEventListener('submit', async function (e) {
  e.preventDefault();

  let name = document.getElementById('name').value;
  let description = document.getElementById('description').value;
  let price = document.getElementById('price').value;
  let color = document.getElementById('color').value;
  try {
    const docRef = await addDoc(collection(db, "articles"), {
      name: name,
      description: description,
      price: price,
      color: color,
    });
    let idUser = docRef.id
    console.log("Document written with ID: ", idUser);
    alert('Bravo ca marche')
  } catch (error) {
    console.error("Error writing document:", error);
  }
});



window.onload = getAllDataOnce;



























// var products = [
//   {
//     name: "Produit 1",
//     description: "Talon long 9",
//     price: 10000,
//     photo: "./images/MAKET-600x600.jpg"
//   },
//   {
//     name: "Produit 2",
//     description: "Mini Talon",
//     price: 10000,
//     photo: "./images/sandales-a-talons-avec-lacets-600x600.jpg"
//   },
//   // Ajoutez d'autres produits
// ];

// function displayProducts() {
//   var productListDiv = document.getElementById("product-list");
//   productListDiv.innerHTML = "";

//   products.forEach(function(product, index) {
//     var productDiv = document.createElement("div");
//     productDiv.className = "card";
//     productDiv.innerHTML = `
//       <h2>${product.name}</h2>
//       <p>${product.description}</p>
//       <p>Prix: ${product.price} CFA</p>
//       <img src="${product.photo}" alt="${product.name}">
//       <div class="card-buttons">
//         <button onclick="editProduct(${index})">Modifier</button>
//         <button onclick="deleteProduct(${index})">Supprimer</button>
//       </div>
//     `;
//     productListDiv.appendChild(productDiv);
//   });
// }

// function addProduct() {
//   var name = document.getElementById("name").value;
//   var description = document.getElementById("description").value;
//   var price = parseFloat(document.getElementById("price").value);
//   var photoInput = document.getElementById("photo");
//   var photo = photoInput.files[0];

//   if (name && description && !isNaN(price) && photo) {
//     var newProduct = {
//       name: name,
//       description: description,
//       price: price,
//       photo: URL.createObjectURL(photo)
//     };

//     products.push(newProduct);
//     displayProducts();

//     // Effacer les champs du formulaire après l'ajout
//     document.getElementById("product-form").reset();
//   } else {
//     alert("Veuillez remplir tous les champs du formulaire.");
//   }
// }

// function editProduct(index) {
//   var newName = prompt("Entrez le nouveau nom du produit:", products[index].name);
//   if (newName !== null) {
//     products[index].name = newName;
//     displayProducts();
//   }
// }

// function deleteProduct(index) {
//   var confirmDelete = confirm("Voulez-vous vraiment supprimer ce produit ?");
//   if (confirmDelete) {
//     products.splice(index, 1);
//     displayProducts();
//   }
// }

// displayProducts();



