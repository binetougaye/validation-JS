// Firestore

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
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

      document.getElementById('categorie').innerHTML = article.length
    })
    .catch((error) => {
      console.error("Error getting documents: ", error);
    });
}


window.onload = getAllDataOnce;














// // Variables
// let container = document.querySelector(".pro");
// let categorieFemme = document.querySelector(".femme");
// let sacHomme = document.querySelector(".homme");
// let hiver = document.querySelector(".hiver");
// let panier = document.querySelector(".panier");
// let bag = document.querySelector(".bag");

// let span = document.querySelector("span");
// let main = document.querySelector(".main");
// let carousel = document.querySelector(".carousel");
// let title = document.querySelector(".title");
// // let modalBody = document.querySelector(".modal-body");
// let modalImg = document.querySelector(".img");
// let product = document.querySelector(".product");
// let quantity = document.querySelector(".quantity");
// let price = document.querySelector(".price");
// let total = document.querySelector(".total");
// let Price = document.querySelector(".Price");
// const tabProduct = [
//   {
//     id: 1,
//     product: "p1.jpg",
//   },
//   {
//     id: 2,
//     product: "p2.jpg",
//   },
//   {
//     id: 3,
//     product: "lacet.jpg",
//   },
//   {
//     id: 4,
//     product: "p4.jpg",
//   },
// ];


// let getProduct = tabProduct.map(
//   (p) =>
//     (container.innerHTML += `
//     <div class="col-lg-3">
//         <img src="images/${p.product}" alt="" class="w-100">
    
//     </div>
//     `)
//   // Au click ramène vers la page boutique
// );
// //
// // CATEGORIE FEMME
// const tabFemme = [
//   {
//     id: 1,
//     img: "sac1.jpeg",
//   },
//   {
//     id: 2,
//     img: "sac2.jpeg",
//   },
//   {
//     id: 3,
//     img: "sac3.jpeg",
//   },
//   {
//     id: 4,
//     img: "sac4.jpeg",
//   },
// ];
// let getProductWomen = tabFemme.map((f) => {
//   categorieFemme.innerHTML += `
//   <div class="col-lg-3">
//       <img src="images/${f.img}" alt="" class="w-100">
//   </div>
//   `;
// });
// // SAC HOMME
// const tabHomme = [
//   {
//     id: 1,
//     img: "sachomme1.jpeg",
//   },
//   {
//     id: 2,
//     img: "sachomme2.jpeg",
//   },
//   {
//     id: 3,
//     img: "sachomme3.jpeg",
//   },
//   {
//     id: 4,
//     img: "sachomme4.jpeg",
//   },
// ];
// let getProductMen = tabHomme.map((h) => {
//   sacHomme.innerHTML += `
//   <div class="col-lg-3">
//       <img src="images/${h.img}" alt="" class="w-100">
//   </div>
//   `;
// });
// // COLLECTION HIVER
// const tabHiver = [
//   {
//     id: 1,
//     img: "pull1.jpeg",
//   },
//   {
//     id: 2,
//     img: "pull2.png",
//   },
//   {
//     id: 3,
//     img: "pull5.png",
//   },
//   {
//     id: 4,
//     img: "pull4.jpeg",
//   },
// ];
// let getProductHiver = tabHiver.map((hiver) => {
//   hiver.innerHTML += `
//   <div class="col-lg-3">
//     <img src="images/${hiver.img}" alt="" class="w-100">
//   </div>
//   `;
// });
// // Eventail
// let eventail = document.querySelector(".eventail");
// const tabEventail = [
//   {
//     id: 1,
//     img: "eventail1.jpg",
//     title: "Eventail",
//     title2: "Eventail beige",
//     prix: 3000,
//   },
//   {
//     id: 2,
//     img: "eventail2.jpg",
//     title: "Eventail",
//     title2: "Eventail bleu",
//     prix: 3000,
//   },
//   {
//     id: 3,
//     img: "eventail3.jpg",
//     title: "Eventail",
//     title2: "Eventail bleu de nuit",
//     prix: 3000,
//   },
//   {
//     id: 4,
//     img: "eventail4.jpg",
//     title: "Eventail",
//     title2: "Eventail jaune",
//     prix: 3000,
//   },
// ];
// let getEventail = tabEventail.map((e) => {
//   eventail.innerHTML += `
//   <div class="col-lg-3">
//     <img src="images/${e.img}" alt="" class="w-100 imgEventail">
//     <p class="text-secondary">${e.title}</p>
//     <p>${e.title2}</p>
//     <p>${e.prix} FCFA</p>
//   </div>
//   `;
// });

// // MEILLEURES VENTES
// let bestSellers = document.querySelector(".bestsellers");
// const tabBestSellers = [
//   {
//     id: 1,
//     img: "talon2.jpeg",
//     title: "Talon long",
//     title2: "meilleure vente",
//     prix: 10000,
//   },
//   {
//     id: 2,
//     img: "talon3.webp",
//     title: "Talon long beige",
//     title2: "meilleure vente",
//     prix: 8000,
//   },
//   {
//     id: 3,
//     img: "talon2.jpeg",
//     title: "Talon long lacet noir",
//     title2: "meilleure vente",
//     prix: 10000,
//   },
//   {
//     id: 4,
//     img: "talon1.webp",
//     title: "Talon long simple",
//     title2: "meilleure vente",
//     prix: 10000,
//   },
// ];
// let getBS = tabBestSellers.map((b) => {
//   bestSellers.innerHTML += `
//   <div class="col-lg-3 p-0">
//     <img src="images/${b.img}" alt="" class="w-100 imgBestSellers">
//     <p class="text-secondary">${b.title}</p>
//     <p>${b.title2}</p>
//     <p>${b.prix} FCFA</p>
//   </div>
//   `;
// });
// let b2 = document.querySelector(".b2");
// const tabB2 = [
//   {
//     id: 1,
//     img: "nuepied1.gif",
//   },
//   {
//     id: 2,
//     img: "nuepied1.gif",
//   },
//   {
//     id: 3,
//     img: "nuepied1.gif",
//   },
//   {
//     id: 4,
//     img: "nuepied1.gif",
//   },
// ];
// let getB2 = tabB2.map((b2) => {
//   b2.innerHTML += `
// <div class="col-lg-3 p-0">
// <img src="images/${b2.img}" alt="" class="w-100">
// </div>
// `;
// });
// let autresProduits = document.querySelector(".autres");
// let tabOthers = [
//   {
//     id: 1,
//     img: "sacmain.png",
//     title: "Sac à main",
//     title2: "autres produits",
//     prix: 10000,
//   },
//   {
//     id: 2,
//     img: "accessoire.png",
//     title: "Accessoire africain",
//     title2: "autres produits",
//     prix: 4000,
//   },
//   {
//     id: 3,
//     img: "pochette.png",
//     title: "Pochette unisexe",
//     title2: "autres produits",
//     prix: 5000,
//   },
// ];
// let getOthers = tabOthers.map((o) => {
//   autresProduits.innerHTML += `
//   <div class="col-lg-3">
// <img src="images/${o.img}" alt="" class="w-100 othersImg">
// <p class="text-secondary">${o.title}</p>
// <p>${o.title2}</p>
// <p>${o.prix} FCFA</p>
// </div>
//   `;
// });
// // LOGIC EVENTAIL
// let imgEventail = document.querySelectorAll(".imgEventail");
// console.log(imgEventail);
// // let p = 0;
// for (i = 0; i < tabEventail.length; i++) {
//   for (i = 0; i < imgEventail.length; i++) {
//     let test = tabEventail[i];
//     let btn = imgEventail[i];
//     imgEventail[i].addEventListener("click", function () {
//       carousel.innerHTML = `<img src="images/panier.png">`;
//       title.innerHTML = "Panier";
//       main.innerHTML = `
//       <div class="container mt-5">
//       <div class="row justify-content-center">
//       <div class="col">
//       <img src="images/${test.img}">
//       </div>
//       <div class="col">
//       <h5>${test.title2}</h5>
//       <h6  class="text-secondary">${test.prix} FCFA</h6>
//       <p>Catégorie: ${test.title}</p>
//       <button class="mt-5 border-0 p-1 btnAddeventail">Ajouter au panier</button>
//       </div>
//       </div>
//       </div>
//       `;
//       let m = 0;
//       let btnAddEv = document.querySelectorAll(".btnAddeventail");
//       for (i = 0; i < btnAddEv.length; i++) {
//         btnAddEv[i].addEventListener("click", function () {
//           let incre = m++;
//           panier.innerHTML = incre;
//           quantity.innerHTML = `<p class="text-secondary">Quantity: ${incre}</p>`;
//           price.innerHTML = `<p>${test.prix}FCFA</p>`;
//           let prixFinal = test.prix * incre;
//           total.innerHTML = `Total:`;
//           Price.innerHTML = `${prixFinal} FCFA`;
//         });
//       }
//       console.log(test);
//       let incr = p++;
//       panier.innerHTML = incr;
//       // Ajout au panier
//       modalImg.innerHTML = `<img src="images/${test.img}" style="width:80px">`;
//       product.innerHTML = test.title;
//       quantity.innerHTML = `<p class="text-secondary">Quantity: ${incr}</p>`;
//       price.innerHTML = `<p>${test.prix}FCFA</p>`;
//       let prixFinal = test.prix * incr;
//       total.innerHTML = `Total:`;
//       Price.innerHTML = `${prixFinal} FCFA`;
//     });
//     // Finaliser la commande
//   }
// }
// // LOGIC BESTSELLERS
// let imgBestSellers = document.querySelectorAll(".imgBestSellers");
// for (i = 0; i < tabBestSellers.length; i++) {
//   for (i = 0; i < imgBestSellers.length; i++) {
//     let test = tabBestSellers[i];
//     let btn = imgBestSellers[i];
//     imgBestSellers[i].addEventListener("click", function () {
//       console.log(test);
//       carousel.innerHTML = `<img src="images/panier.png">`;
//       main.innerHTML = `
//       <div class="container mt-5">
//       <div class="row justify-content-center">
//       <div class="col">
//       <img src="images/${test.img}">
//       </div>
//       <div class="col">
//       <h5>${test.title2}</h5>
//       <h6  class="text-secondary">${test.prix} FCFA</h6>
//       <p>Catégorie: ${test.title}</p>
//       <button class="mt-5 border-0 p-1 add">Ajouter au panier</button>
//       </div>
//       </div>
//       </div>
//       `;
//       //       // PAGE VOIR PRODUIT
//       let n = 0;
//       let btnAdd = document.querySelectorAll(".add");
//       console.log(btnAdd);
//       for (i = 0; i < btnAdd.length; i++) {
//         btnAdd[i].addEventListener("click", function () {
//           let inc = n++;
//           panier.innerHTML = inc;
//           quantity.innerHTML = `<p class="text-secondary">Quantity: ${inc}</p>`;
//           price.innerHTML = `<p>${test.prix}FCFA</p>`;
//           let prixFinal = test.prix * inc;
//           total.innerHTML = `Total:`;
//           Price.innerHTML = `${prixFinal} FCFA`;
//         });
//       }
//       //       // END

//       //       // Ajout au panier
//       let incr = p++;
//       panier.innerHTML = incr;
//       modalImg.innerHTML = `<img src="images/${test.img}" style="width:80px">`;
//       product.innerHTML = test.title;
//       quantity.innerHTML = `<p class="text-secondary">Quantity: ${incr}</p>`;
//       price.innerHTML = `<p>${test.prix}FCFA</p>`;
//       let prixFinal = test.prix * incr;
//       total.innerHTML = `Total:`;
//       Price.innerHTML = `${prixFinal} FCFA`;
//     });
//     //     // Finaliser la commande
//   }
// }
// // LOGIC AUTRES PRODUITS
// let othersProducts = document.querySelectorAll(".othersImg");
// console.log(othersProducts);
// for (i = 0; i < tabOthers.length; i++) {
//   for (i = 0; i < othersProducts.length; i++) {
//     let test = tabOthers[i];
//     let btn = othersProducts[i];
//     othersProducts[i].addEventListener("click", function () {
//       console.log(test);
//       carousel.innerHTML = "";
//       main.innerHTML = `
//       <div class="container mt-5">
//       <div class="row justify-content-center align-items-center">
//       <div class="col">
//       <img src="images/${test.img}">
//       </div>
//       <div class="col">
//       <h5>${test.title}</h5>
//       <h6  class="text-secondary">${test.prix} FCFA</h6>
//       <p>Catégorie: ${test.title2}</p>
//       <button class="mt-5 border-0 p-1 btnOthers">Ajouter au panier</button>
//       </div>
//       </div>
//       </div>
//       `;
//       //
//       let o = 0;
//       let btnOthers = document.querySelectorAll(".btnOthers");
//       for (i = 0; i < btnOthers.length; i++) {
//         btnOthers[i].addEventListener("click", function () {
//           let increm = o++;
//           panier.innerHTML = increm;
//           quantity.innerHTML = `<p class="text-secondary">Quantity: ${increm}</p>`;
//           price.innerHTML = `<p>${test.prix}FCFA</p>`;
//           let prixFinal = test.prix * increm;
//           total.innerHTML = `Total:`;
//           Price.innerHTML = `${prixFinal} FCFA`;
//         });
//       }
//       let incr = p++;
//       panier.innerHTML = incr;
//       // Ajout au panier
//       modalImg.innerHTML = `<img src="images/${test.img}" style="width:80px">`;
//       product.innerHTML = test.title;
//       quantity.innerHTML = `<p class="text-secondary">Quantity: ${incr}</p>`;
//       price.innerHTML = `<p>${test.prix}FCFA</p>`;
//       let prixFinal = test.prix * incr;
//       total.innerHTML = `Total:`;
//       Price.innerHTML = `${prixFinal} FCFA`;
//     });
//     // Finaliser la commande
//   }
// }
