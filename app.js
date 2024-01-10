// Variables
// let modal = document.querySelector(".modal");
// let modalTitle = document.querySelector(".modal-title");
// let panier = document.getElementById("cart");
// let modalBody = document.querySelector(".modal-body");
//
// function ajouter produit
let container = document.querySelector(".pro");
const tabProduct = [
  {
    id: 1,
    product: "roberouge.jpg",
  },
  {
    id: 2,
    product: "redDress.jpg",
    title: "Pull-over torsadé foil",
    price: 59.99,
  },
  {
    id: 3,
    product: "yellowDress.jpg",
    title: "Cardigan liserés contrastants",
    price: 79.99,
  },
  {
    id: 4,
    product: "soie.jpg",
    title: "Pull-over oversize col V",
    price: 69.99,
  },
  {
    id: 5,
    product: "dress.jpg",
    title: "test",
    price: 69.99,
  },
  {
    id: 6,
    product: "robemarron.jpg",
    title: "test",
    price: 69.99,
  },
];
for (i = 0; i < tabProduct.length; i++) {
  container.innerHTML += `<div class="">
    <div class="">
        <div class="card border-0 ">
            <img style="height: 480px;" src="images/${tabProduct[i].product}" id="tt" class="shadow" alt="">
            <div class="card-body">
                <h4 class="clothes text-white fw-bold"></h4>
                <div class="d-flex mt-2 justify-content-center align-items-center">
                  <button class="w-100  p-1 ajout">Voir produit</button>
                </div>
            </div>
        </div>
    </div>
  </div>`;
  let button = document.querySelectorAll(".ajout");
  console.log(button);
  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      alert("hello");
    });
  }
}
