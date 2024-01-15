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
    <img src="imgNues/${item.image}" alt="${item.title}">
    <p class="text-center titre">${item.title}<p>
    <p class="text-center">${item.price}</p>
    <button i" class="btn rounded shadow w-100 m-auto  ajout">Ajouter au panier</button>
  </div>
  
`
);

// affichage information
container.innerHTML = pied;
let panier = document.querySelector(".panier");
let ajout = document.querySelectorAll(".product button");
let modalImg = document.querySelector(".img");
let product = document.querySelector(".product");
let quantity = document.querySelector(".quantity");
let price = document.querySelector(".price");
let total = document.querySelector(".total");
let Price = document.querySelector(".Price");
console.log(ajout);
let p = 0;
for (i = 0; i < piedImage.length; i++) {
  for (i = 0; i < ajout.length; i++) {
    let test = piedImage[i];
    let btn = ajout[i];
    ajout[i].addEventListener("click", function () {
      console.log(test);
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
