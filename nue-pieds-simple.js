let container = document.querySelector("#container");
const infoimage = [
  {
    id: 1,
    image: "images/nuePied1.gif",
    title: "Nues  pied noir",
    price: 6000,
  },
  {
    id: 2,
    image: "images/nuePied2.gif",
    title: "Nues-pied noir simple",
    price: 4000,
  },

  {
    id: 3,
    image: "images/nuePied3.gif",
    title: "Nues pied simple",
    price: 5000,
  },

  {
    id: 4,
    image: "images/nuePied1.jpg",
    title: "Nues  pied simple",
    price: 5000,
  },
  {
    id: 5,
    image: "images/fav.jpeg",
    title: "Nues  pied simple",
    price: 3000,
  },
  {
    id: 6,
    image: "images/nuePied6.jpg",
    title: "Nues  pied simple",
    price: 3000,
  },
];
let mapp = infoimage.map((i) => {
  container.innerHTML += `
    <div class="col-lg-4 mb-3 text-center">
        <img src="${i.image}" alt="" class="image">
        <p>${i.title}</p>
        <p>${i.price} FCFA</p>

    </div>
    `;
});

// Variables
let image = document.querySelectorAll(".image");
console.log(image);
let headerSection = document.querySelector(".header-section");
let containers = document.querySelector(".pro");
let categorieFemme = document.querySelector(".femme");
let sacHomme = document.querySelector(".homme");
let hiver = document.querySelector(".hiver");
let panier = document.querySelector(".panier");
let bag = document.querySelector(".bag");

let span = document.querySelector("span");
let main = document.querySelector("main");
let title = document.querySelector(".title");
// let modalBody = document.querySelector(".modal-body");
let modalImg = document.querySelector(".img");
let product = document.querySelector(".product");
let quantity = document.querySelector(".quantity");
let price = document.querySelector(".price");
let total = document.querySelector(".total");
let Price = document.querySelector(".Price");
// LOGIC
for (let i = 0; i < infoimage.length; i++) {
  for (let i = 0; i < image.length; i++) {
    let test = infoimage[i];
    let btn = image[i];
    image[i].addEventListener("click", function () {
      headerSection.innerHTML = `<img src="images/panier.png">`;
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
        <button class="mt-5 border-0 p-1  button">Ajouter au panier</button>
        </div>
        </div>
        </div>
        `;
      let m = 0;
      let btn = document.querySelectorAll(".button");
      for (i = 0; i < btn.length; i++) {
        btn[i].addEventListener("click", function () {
          let incre = m++;
          panier.innerHTML = incre;
          quantity.innerHTML = `<p class="text-secondary">Quantity: ${incre}</p>`;
          price.innerHTML = `<p>${test.price}FCFA</p>`;
          let prixFinal = test.price * incre;
          total.innerHTML = `Total:`;
          Price.innerHTML = `${prixFinal} FCFA`;
        });
      }
      console.log(test);
      let p = 0;
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
