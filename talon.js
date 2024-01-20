const tabProduct = [
  {
    id: 1,
    product: "talonMarron.webp",
    title: "Talon lacet nude",
    prix: 10000,
  },
  {
    id: 2,
    product: "talonVert.jpg",
    title: "Talon lacet vert fluo",
    prix: 10000,
  },
  {
    id: 3,
    product: "v5.webp",
    title: "Talon lacet marron",
    prix: 10000,
  },
  {
    id: 4,
    product: "talonMaroon.webp",
    title: "Talon lacet marron",
    prix: 10000,
  },
  {
    id: 5,
    product: "v3.jpeg",
    title: "Talon vert lacet",
    prix: 10000,
  },
  {
    id: 6,
    product: "vedette1.webp",
    title: "Talon long violet",
    prix: 10000,
  },
];

let container = document.querySelector("#product");

let panier = document.querySelector(".panier");
let bag = document.querySelector(".bag");

let span = document.querySelector("span");
let main = document.querySelector("main");
let title = document.querySelector(".title");
let modalImg = document.querySelector(".img");
let product = document.querySelector(".product");
let quantity = document.querySelector(".quantity");
let price = document.querySelector(".price");
let total = document.querySelector(".total");
let Price = document.querySelector(".Price");
let getProduct = tabProduct.map(
  (p) =>
    (container.innerHTML += `
      <div class="col-lg-4 mb-3">
          <img src="images/${p.product}" alt="" class="w-100 images" style="width: 350px; height: 350px; object-fit: cover;">
          <p class="text-center text-secondary mt-2">${p.title}</p>
          <p class="text-center text-secondary">${p.prix} FCFA</p>
      </div>
  
      `)
);
let images = document.querySelectorAll(".images");
console.log(images);
//
for (let i = 0; i < tabProduct.length; i++) {
  for (let i = 0; i < images.length; i++) {
    let test = tabProduct[i];
    let btn = images[i];
    images[i].addEventListener("click", function () {
      main.innerHTML = `
        <div class="container mt-5">
        <div class="row justify-content-center">
        <div class="col">
        <img src="images/${test.product}">
        </div>
        <div class="col">
        <h5>${test.title}</h5>
        <h6  class="text-secondary">${test.prix} FCFA</h6>
        <p>Catégorie: ${test.title}</p>
        <button class="mt-5 border-0 p-1 btnAddeventail">Ajouter au panier</button>
        </div>
        </div>
        </div>
        `;
      let m = 0;
      let btnAddEv = document.querySelectorAll(".btnAddeventail");
      for (i = 0; i < btnAddEv.length; i++) {
        btnAddEv[i].addEventListener("click", function () {
          let incre = m++;
          panier.innerHTML = incre;
          quantity.innerHTML = `<p class="text-secondary">Quantity: ${incre}</p>`;
          price.innerHTML = `<p>${test.prix}FCFA</p>`;
          let prixFinal = test.prix * incre;
          total.innerHTML = `Total:`;
          Price.innerHTML = `${prixFinal} FCFA`;
        });
      }
      console.log(test);
      let p = 0;
      let incr = p++;
      panier.innerHTML = incr;
      // Ajout au panier
      modalImg.innerHTML = `<img src="images/${test.product}" style="width:80px">`;
      product.innerHTML = test.title;
      quantity.innerHTML = `<p class="text-secondary">Quantity: ${incr}</p>`;
      price.innerHTML = `<p>${test.prix}FCFA</p>`;
      let prixFinal = test.prix * incr;
      total.innerHTML = `Total:`;
      Price.innerHTML = `${prixFinal} FCFA`;
    });
    // Finaliser la commande
  }
}
