// Variables
// Fonction Voir produit et AJOUT dans le Panier
 let container = document.querySelector(".pro");
 let text = document.querySelector(".text");
let header = document.querySelector(".bg");
 let panier = document.querySelector(".panier");
const tabProduct = [
  {
    id: 1,
    product: "roberouge.jpg",
    title: "Robe de soirée",
    price: 124.99,
  },
  {
    id: 2,
    product: "redDress.jpg",
    title: "Robe de soirée",
    price: 299.99,
  },
  {
    id: 3,
    product: "yellowDress.jpg",
    title: "Robe de soirée",
    price: 179.99,
  },
  {
    id: 4,
    product: "soie.jpg",
    title: "Robe de soirée",
    price: 169.99,
  },
  {
    id: 5,
    product: "dress.jpg",
    title: "Robe de soirée",
    price: 180.99,
  },
  {
    id: 6,
    product: "robemarron.jpg",
    title: "Robe de soirée",
    price: 110.99,
  },
];

container.innerHTML = "";
let getProduct = tabProduct.map(
  (p) =>
    (container.innerHTML += `<div class="mt-4">
              <div class="">
                <div class="card border-0 ms-3 carte ">
                    <img style="height: 480px;" src="images/${p.product}" id="tt" class="shadow" alt="">
                    <div class="card-body">
                        <h4 class="clothes text-white fw-bold"></h4>
                        <div class="test d-flex mt-2 justify-content-center align-items-center">
                         <button id="${p.id}">Voir le produit</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>`)
);
// let urlComplet = window.location.pathname;
let buttons = document.querySelectorAll(".card button");
let cards = document.querySelectorAll(".carte");
console.log(cards);
for (i = 0; i < tabProduct.length; i++) {
  for (i = 0; i < buttons.length; i++) {
    let test = tabProduct[i];
    let btn = buttons[i];
    buttons[i].addEventListener("click", function () {
      container.style.backgroundColor = "#303952";
      container.style.padding = "40px";
      // urlComplet = "/ajout.html";
      console.log(test);
      header.innerHTML = "";
      text.innerHTML = "";
      container.innerHTML = `<div class="row">
      <div class="col-lg-6">
      <img src="images/${test.product}" class="me-5 w-100">
      </div>
      <div class="col-lg-6">
        <h1 class="text-warning">${test.title}</h1>
        <p>Sold by: Fabi's shop</p>
        <p>
        <i class="fa fa-star text-warning" aria-hidden="true"></i>
        <i class="fa fa-star  text-warning" aria-hidden="true"></i>
        <i class="fa fa-star  text-warning" aria-hidden="true"></i>
        <i class="fa fa-star-half-o  text-warning" aria-hidden="true"></i>
        <i class="fa fa-star-o text-secondary" aria-hidden="true">(200)</i> 
        </p>
        
      <div class="row d-flex align-items-center">
          <div class="col">
          <label class="text-secondary">Size: </label>
          </div>
          <div class="col">
          <select name="" id="" class="p-1 border border-secondary rounded" style="width: 120px;">
            <option value="">Select size</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
        </select>
        </div>
      </div>

     
      <button class="w-100 mt-5 border-0 btnCart">Add to cart</button>
      </div>
     
      </div>
      </div>`;

      let btnAdd = document.querySelector(".btnCart");
      let n = 1;

      //
      btnAdd.addEventListener("click", function () {
        panier.innerHTML = n++;
      });
    });
  }
}

// console.log(urlComplet);
