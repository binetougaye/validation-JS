let container = document.querySelector(".container");
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
    price: 3.0,
  },

  {
    id: 4,
    image: "./images/im4.jpg",
    title: "chaussure marron",
    price: 3.0,
  },
  {
    id: 5,
    image: "./images/im5.jpg",
    title: "chaussure marron2",
    price: 3.0,
  },

  {
    id: 6,
    image: "./images/im6.jpg",
    title: "chaussure marron3",
    price: 3.0,
  },
  {
    id: 7,
    image: "./images/im7.jpg",
    title: "chaussure marron4",
    price: 3.0,
  },
  {
    id: 8,
    image: "./images/im8.jpg",
    title: "chaussure marron5",
    price: 3.0,
  },

  {
    id: 8,
    image: "./images/im.jpg",
    title: "chaussure noir",
    price: 3.0,
  },
];
let modalImg = document.querySelector(".img");
let product = document.querySelector(".product");
let quantity = document.querySelector(".quantity");
let price = document.querySelector(".price");
let total = document.querySelector(".total");
let Price = document.querySelector(".Price");
let panier = document.querySelector(".panier");
const chaussure = chaussureImage.map(
  (item) =>
    `
<div class="product m-4">
    <img src="${item.image}" alt="${item.title}">
    <p class="text-center titre">${item.title}</p>
    <p class="text-center">${item.price}</p>
    <button class="m-auto ajout" onclick="voir()" style="border-radius:15px;">Ajouter au panier</button>

</div>
`
);

// affichage information
container.innerHTML = chaussure;

document.addEventListener("DOMContentLoaded", function () {
  const sandaleElement = document.querySelector(".sandale");
  sandaleElement.style.backgroundImage =
    'url("https://tayeur.com/wp-content/uploads/2022/07/Frame-17-3.png")';
  sandaleElement.style.height = "300px";
});
let ajout = document.querySelectorAll(".ajout");
console.log(ajout);
for (i = 0; i < chaussureImage.length; i++) {
  for (i = 0; i < ajout.length; i++) {
    let test = chaussureImage[i];
    let btn = ajout[i];
    ajout[i].addEventListener("click", function () {
      let m = 0;

      console.log(test);
      let incr = p++;
      panier.innerHTML = incr;
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
// document.addEventListener("DOMContentLoaded", function () {
//   const sandaleElement = document.querySelector(".sandale");
//   sandaleElement.style.backgroundImage = 'url("https://tayeur.com/wp-content/uploads/2022/07/Frame-17-3.png")';
//   sandaleElement.style.height = '300px';

//   const container = document.querySelector(".container");
//   container.innerHTML = chaussure;
// });
