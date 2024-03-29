let container = document.querySelector(".container");
const talonlacet = [
  {
    id: 1,
    image: "talonsLacets1.png",
    title: "talon lacet  rose",
    price: 5000,
  },
  {
    id: 2,
    image: "talonsLacets2.png",
    title: "talon lacet blanc",
    price: 5000,
  },

  {
    id: 3,
    image: "talonsLacets3.png",
    title: "talon lacet marron",
    price: 5000,
  },

  {
    id: 4,
    image: "talonsLacets4.png",
    title: "talon lacet noir",
    price: 8000,
  },
  {
    id: 5,
    image: "talonsLacets5.png",
    title: "talon lacet noir",
    price: 7000,
  },
  {
    id: 6,
    image: "talonsLacets6.png",
    title: "talon lacet noir",
    price: 8000,
  },
];
const talon = talonlacet.map(
  (shoes) =>
    `
<div class="product m-4">
    <img src="talonsLacets/${shoes.image}" alt="${shoes.title}">
    <p class="text-center title">${shoes.title}<p>
    <p class="text-center  text-secondary">${shoes.price}</p>
    <button class="buttons  m-auto  add btn w-100 shadow p-1">Ajouter au panier</button>
  </div>
  
`
);
container.innerHTML = talon;
let buttons = document.querySelectorAll(".buttons");
let modalImg = document.querySelector(".img");
let product = document.querySelector(".product");
let quantity = document.querySelector(".quantity");
let price = document.querySelector(".price");
let total = document.querySelector(".total");
let Price = document.querySelector(".Price");
let panier = document.querySelector(".panier");
let p = 0;
console.log(buttons);
for (i = 0; i < talonlacet.length; i++) {
  for (i = 0; i < buttons.length; i++) {
    let test = talonlacet[i];
    let btn = buttons[i];
    buttons[i].addEventListener("click", function () {
      container.innerHTML = `
      <div class="container mt-5">
      <div class="row justify-content-center align-items-center">
      <div class="col">
      <img src="images/${test.img}">
      </div>
      <div class="col">
      <h5>${test.title}</h5>
      <h6  class="text-secondary">${test.price} FCFA</h6>
      <button class="mt-5 border-0 p-1 btnOthers">Ajouter au panier</button>
      </div>
      </div>
      </div>
      `;
      //
      console.log(test);
      let incr = p++;
      panier.innerHTML = incr;
      let o = 0;
      let btnOthers = document.querySelectorAll(".btnOthers");
      for (i = 0; i < btnOthers.length; i++) {
        btnOthers[i].addEventListener("click", function () {
          let increm = o++;
          panier.innerHTML = increm;
          quantity.innerHTML = `<p class="text-secondary">Quantity: ${increm}</p>`;
          price.innerHTML = `<p>${test.price}FCFA</p>`;
          let prixFinal = test.price * increm;
          total.innerHTML = `Total:`;
          Price.innerHTML = `${prixFinal} FCFA`;
        });
      }
      // Ajout au panier
      modalImg.innerHTML = `<img src="images/${test.image}" style="width:80px">`;
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
