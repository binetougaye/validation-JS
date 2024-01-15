let containers = document.querySelector(".container");
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
const chaussure = chaussureImage.map(
  (item) =>
    `
<div class="product m-4">
    <img src="${item.image}" alt="${item.title}">
    <p class="text-center titre">${item.title}</p>
    <p class="text-center">${item.price}</p>
    <button class="m-auto ajout" onclick="voir()" style="border-radius:15px">Ajouter au panier</button>
</div>
`
);

// affichage information
containers.innerHTML = chaussure;

document.addEventListener("DOMContentLoaded", function () {
  const sandaleElement = document.querySelector(".sandale");
  sandaleElement.style.backgroundImage =
    'url("https://tayeur.com/wp-content/uploads/2022/07/Frame-17-3.png")';
  sandaleElement.style.height = "300px";
});
let ajout = document.querySelectorAll(".ajout");
