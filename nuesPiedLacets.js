let container = document.querySelector(".container");
const piedImage = [
  {
    id: 1,
    image: "w-300x300.jpg",
    title: "Nues  pied noir",
    price: 5000,
  },
  {
    id: 2,
    image: "x-300x300.jpg",
    title: "Nues-pied beige",
    price: 5000,
  },

  {
    id: 3,
    image: "v-1-300x300.jpg",
    title: "Nues pied marron",
    price: 5000,
  },
  {
    id: 4,
    image: "w-300x300.jpg",
    title: "Nues  pied lacet noir",
    price: 5000,
  },
  {
    id: 5,
    image: "pmm-300x300 (2).jpg",
    title: "Nues  pied rose",
    price: 3000,
  },
  {
    id: 6,
    image: "f-300x300 (1).gif",
    title: "Nues  pied orange",
    price: 3000,
  },
];
const pied = piedImage.map(
  (item) =>
    `
<div class="product m-4">
    <img src="imgNues/${item.image}" alt="${item.title}" class="imgNuePied">
    <p class="text-center titre">${item.title}<p>
    <p class="text-center">${item.price}</p>
  </div>
  
`
);

// affichage information
container.innerHTML = pied;
let bg = document.querySelector(".BgNuedpiedLacet");
let panier = document.querySelector(".panier");
let modalImg = document.querySelector(".img");
let product = document.querySelector(".product");
let quantity = document.querySelector(".quantity");
let price = document.querySelector(".price");
let total = document.querySelector(".total");
let Price = document.querySelector(".Price");
let imgNuePied = document.querySelectorAll(".imgNuePied");
console.log(imgNuePied);
let p = 0;
for (i = 0; i < piedImage.length; i++) {
  for (i = 0; i < imgNuePied.length; i++) {
    let test = piedImage[i];
    let btn = imgNuePied[i];
    imgNuePied[i].addEventListener("click", function () {
      console.log(test);
      bg.innerHTML = `<img src="ImgNues/panier.png">`;
      container.innerHTML = `
      <div class="mt-5">
      <div class="row justify-content-center align-items-center">
      <div class="col">
      <img src="${test.image}">
      </div>
      <div class="col">
      <h5>${test.title}</h5>
      <h6  class="text-secondary">${test.price} FCFA</h6>
      <p>Catégorie: ${test.title}</p>
      <button class="mt-5 border-0 p-1 btnAdd">Ajouter au panier</button>
      </div>
      </div>
      </div>
      `;
      //
      let o = 0;
      let btnAdd = document.querySelectorAll(".btnAdd");
      for (i = 0; i < btnAdd.length; i++) {
        btnAdd[i].addEventListener("click", function () {
          let increm = o++;
          panier.innerHTML = increm;
          quantity.innerHTML = `<p class="text-secondary">Quantity: ${increm}</p>`;
          price.innerHTML = `<p>${test.price}FCFA</p>`;
          let prixFinal = test.price * increm;
          total.innerHTML = `Total:`;
          Price.innerHTML = `${prixFinal} FCFA`;
        });
      }
      let incr = p++;
      panier.innerHTML = incr;
      // Ajout au panier
      modalImg.innerHTML = `<img src="${test.image}" style="width:80px">`;
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
