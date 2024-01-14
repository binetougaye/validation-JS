let container = document.querySelector(".container");
const piedImage = [
  {
    id: 1,
    image: "w-300x300.jpg",
    title: "Nues  pied noir",
    price: "5.000 CFA",
  },
  {
    id: 2,
    image: "x-300x300.jpg",
    title: "Nues-pied beige",
    price: "5.000 CFA",
  },

  {
    id: 3,
    image: "v-1-300x300.jpg",
    title: "Nues pied marron",
    price: "5.000 CFA",
  },

  {
    id: 4,
    image: "w-300x300.jpg",
    title: "Nues  pied lacet noir",
    price: "5.000 CFA",
  },
  {
    id: 5,
    image: "pmm-300x300 (2).jpg",
    title: "Nues  pied rose",
    price: "3.000 CFA",
  },
  {
    id: 6,
    image: "f-300x300 (1).gif",
    title: "Nues  pied orange",
    price: "3.000 CFA",
  },
];
const pied = piedImage.map(
  (item) =>
    `
<div class="product m-4">
    <img src="imgNues/${item.image}" alt="${item.title}">
    <p class="text-center titre">${item.title}<p>
    <p class="text-center">${item.price}</p>
    <button class="btn rounded shadow w-100 m-auto  ajout">Ajouter au panier</button>
  </div>
  
`
);

// affichage information
container.innerHTML = pied;
