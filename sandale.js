let content = document.querySelector("#container");
const chaussureImage = [
  {
    id: 1,
    image: "./images/im1.jpg",
    title: "chaussure argentin",
    price: 3000,
  },
  {
    id: 2,
    image: "./images/im2.jpg",
    title: "chaussure orange",
    price: 3000,
  },

  {
    id: 3,
    image: "./images/im3.jpg",
    title: "chaussure vert",
    price: 3000,
  },

  {
    id: 4,
    image: "./images/im4.jpg",
    title: "chaussure marron",
    price: 3000,
  },
  {
    id: 5,
    image: "./images/im5.jpg",
    title: "chaussure marron2",
    price: 3000,
  },

  {
    id: 6,
    image: "./images/im6.jpg",
    title: "chaussure marron3",
    price: 3000,
  },
];
let mapp = chaussureImage.map((i) => {
  content.innerHTML += `
    <div class="col-lg-4 mb-3 text-center">
        <img src="${i.image}" alt="" class="w-100 image">
        <p>${i.title}</p>
        <p>${i.price} FCFA</p>

    </div>
    `;
});
let categorieFemme = document.querySelector(".femme");
let sacHomme = document.querySelector(".homme");
let hiver = document.querySelector(".hiver");
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

let images = document.querySelectorAll(".image");
console.log(images);
// affichage information

for (let i = 0; i < chaussureImage.length; i++) {
  for (let i = 0; i < images.length; i++) {
    let test = chaussureImage[i];
    let btn = images[i];
    images[i].addEventListener("click", function () {
      console.log(test);
      // carousel.innerHTML = `<img src="images/panier.png">`;
      main.innerHTML = `
      <div class="container mt-5">
      <div class="row justify-content-center">
      <div class="col">
      <img src="${test.image}">
      </div>
      <div class="col">
      <h5>${test.title}</h5>
      <h6  class="text-secondary">${test.price} FCFA</h6>
      <p>Catégorie: ${test.title}</p>
      <button class="mt-5 border-0 p-1 add">Ajouter au panier</button>
      </div>
      </div>
      </div>
      `;
      // PAGE VOIR PRODUIT
      let n = 0;
      let btnAdd = document.querySelectorAll(".add");
      console.log(btnAdd);
      for (i = 0; i < btnAdd.length; i++) {
        btnAdd[i].addEventListener("click", function () {
          let inc = n++;
          panier.innerHTML = inc;
          quantity.innerHTML = `<p class="text-secondary">Quantity: ${inc}</p>`;
          price.innerHTML = `<p>${test.price}FCFA</p>`;
          let prixFinal = test.price * inc;
          total.innerHTML = `Total:`;
          Price.innerHTML = `${prixFinal} FCFA`;
        });
      }
      // END
      let teste = document.querySelector(".img");
      console.log(teste);
      // Ajout au panier
      let p = 0;
      let incr = p++;
      panier.innerHTML = incr;
      teste.innerHTML = `<img src="${test.image}" style="width:80px">`;
      product.innerHTML = test.title;
      quantity.innerHTML = `<p class="text-secondary">Quantity: ${incr}</p>`;
      price.innerHTML = `<p>${test.price}FCFA</p>`;
      let prixFinal = test.price * incr;
      total.innerHTML = `Total:`;
      Price.innerHTML = `${prixFinal} FCFA`;
    });
    // Finaliser la commande
  }
}
