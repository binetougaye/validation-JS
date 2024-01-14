// Variables
// Fonction Voir produit et AJOUT dans le Panier
console.log(window.location.href);
let container = document.querySelector(".pro");
let categorieFemme = document.querySelector(".femme");
let sacHomme = document.querySelector(".homme");
let hiver = document.querySelector(".hiver");
let panier = document.querySelector(".panier");
const tabProduct = [
  {
    id: 1,
    product: "p1.jpg",
  },
  {
    id: 2,
    product: "p2.jpg",
  },
  {
    id: 3,
    product: "lacet.jpg",
  },
  {
    id: 4,
    product: "p4.jpg",
  },
];

container.innerHTML = "";
let getProduct = tabProduct.map(
  (p) =>
    (container.innerHTML += `
    <div class="col-lg-3">
        <img src="images/${p.product}" alt="" class="w-100">
    
    </div>
    `)
  // Au click ramène vers la page boutique
);
//
// CATEGORIE FEMME
const tabFemme = [
  {
    id: 1,
    img: "sac1.jpeg",
  },
  {
    id: 2,
    img: "sac2.jpeg",
  },
  {
    id: 3,
    img: "sac3.jpeg",
  },
  {
    id: 4,
    img: "sac4.jpeg",
  },
];
let getProductWomen = tabFemme.map((f) => {
  categorieFemme.innerHTML += `
  <div class="col-lg-3">
      <img src="images/${f.img}" alt="" class="w-100">
  </div>
  `;
});
// SAC HOMME
const tabHomme = [
  {
    id: 1,
    img: "sachomme1.jpeg",
  },
  {
    id: 2,
    img: "sachomme2.jpeg",
  },
  {
    id: 3,
    img: "sachomme3.jpeg",
  },
  {
    id: 4,
    img: "sachomme4.jpeg",
  },
];
let getProductMen = tabHomme.map((h) => {
  sacHomme.innerHTML += `
  <div class="col-lg-3">
      <img src="images/${h.img}" alt="" class="w-100">
  </div>
  `;
});
// COLLECTION HIVER
const tabHiver = [
  {
    id: 1,
    img: "pull1.jpeg",
  },
  {
    id: 2,
    img: "pull2.png",
  },
  {
    id: 3,
    img: "pull5.png",
  },
  {
    id: 4,
    img: "pull4.jpeg",
  },
];
let getProductHiver = tabHiver.map((hiver) => {
  hiver.innerHTML += `
  <div class="col-lg-3">
    <img src="images/${hiver.img}" alt="" class="w-100">
  </div>
  `;
});
// Eventail
let eventail = document.querySelector(".eventail");
const tabEventail = [
  {
    id: 1,
    img: "eventail1.jpg",
    title: "Eventail",
    title2: "Eventail beige",
    prix: 3000,
  },
  {
    id: 2,
    img: "eventail2.jpg",
    title: "Eventail",
    title2: "Eventail bleu",
    prix: 3000,
  },
  {
    id: 3,
    img: "eventail3.jpg",
    title: "Eventail",
    title2: "Eventail bleu de nuit",
    prix: 3000,
  },
  {
    id: 4,
    img: "eventail4.jpg",
    title: "Eventail",
    title2: "Eventail jaune",
    prix: 3000,
  },
];
let getEventail = tabEventail.map((e) => {
  eventail.innerHTML += `
  <div class="col-lg-3">
    <img src="images/${e.img}" alt="" class="w-100">
    <p class="text-secondary">${e.title}</p>
    <p>${e.title2}</p>
    <p>${e.prix} FCFA</p>
    <button class="mt-2 border-0 p-2 w-100 shadow btn">Ajouter au panier</button>
  </div>
  `;
});

// MEILLEURES VENTES
let bestSellers = document.querySelector(".bestsellers");
const tabBestSellers = [
  {
    id: 1,
    img: "talon2.jpeg",
    title: "Talon long",
    title2: "meilleure vente",
    prix: 10000,
  },
  {
    id: 2,
    img: "talon3.webp",
    title: "Talon long beige",
    title2: "meilleure vente",
    prix: 8000,
  },
  {
    id: 3,
    img: "talon2.jpeg",
    title: "Talon long lacet noir",
    title2: "meilleure vente",
    prix: 10000,
  },
  {
    id: 4,
    img: "talon1.webp",
    title: "Talon long simple",
    title2: "meilleure vente",
    prix: 10000,
  },
];
let getBS = tabBestSellers.map((b) => {
  bestSellers.innerHTML += `
  <div class="col-lg-3 p-0">
    <img src="images/${b.img}" alt="" class="w-100">
    <p class="text-secondary">${b.title}</p>
    <p>${b.title2}</p>
    <p>${b.prix} FCFA</p>
    <button class="mt-2 border-0 p-2 shadow btn">Ajouter au panier</button>
  </div>
  `;
});
let b2 = document.querySelector(".b2");
const tabB2 = [
  {
    id: 1,
    img: "nuepied1.gif",
  },
  {
    id: 2,
    img: "nuepied1.gif",
  },
  {
    id: 3,
    img: "nuepied1.gif",
  },
  {
    id: 4,
    img: "nuepied1.gif",
  },
];
let getB2 = tabB2.map((b2) => {
  b2.innerHTML += `
<div class="col-lg-3 p-0">
<img src="images/${b2.img}" alt="" class="w-100">
</div>
`;
});
let autresProduits = document.querySelector(".autres");
let tabOthers = [
  {
    id: 1,
    img: "sacmain.png",
    title: "Sac à main",
    title2: "autres produits",
    prix: 10000,
  },
  {
    id: 2,
    img: "accessoire.png",
    title: "Accessoire africain",
    title2: "autres produits",
    prix: 4000,
  },
  {
    id: 3,
    img: "pochette.png",
    title: "Pochette unisexe",
    title2: "autres produits",
    prix: 5000,
  },
];
let getOthers = tabOthers.map((o) => {
  autresProduits.innerHTML += `
  <div class="col-lg-3">
<img src="images/${o.img}" alt="" class="w-100">
<p class="text-secondary">${o.title}</p>
<p>${o.title2}</p>
<p>${o.prix} FCFA</p>
<button class="mt-2 border-0 p-2 shadow btn">Ajouter au panier</button>

</div>
  `;
});
// LOGIC EVENTAIL
let buttons = document.querySelectorAll(".button");
console.log(buttons);
for (i = 0; i < tabEventail.length; i++) {
  for (i = 0; i < buttons.length; i++) {
    let test = tabEventail[i];
    let btn = buttons[i];
    buttons[i].addEventListener("click", function () {
      console.log(test);

      // Ajout au panier
    });
    // Finaliser la commande
  }
}
// LOGIC BESTSELLERS
for (i = 0; i < tabBestSellers.length; i++) {
  for (i = 0; i < buttons.length; i++) {
    let test = tabBestSellers[i];
    let btn = buttons[i];
    buttons[i].addEventListener("click", function () {
      console.log(test);

      // Ajout au panier
    });
    // Finaliser la commande
  }
}
