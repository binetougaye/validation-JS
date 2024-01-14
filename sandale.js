// Variables
// Fonction Voir produit et AJOUT dans le Panier
console.log(window.location.href);
let container = document.querySelector(".pro");
let text = document.querySelector(".text");
let header = document.querySelector(".bg");
let panier = document.querySelector(".panier");
let bag = document.getElementById("bag");
let modalTitle = document.querySelector(".modal-title");
let product = document.querySelector(".product");
let prix = document.querySelector(".prix");
let num = document.querySelector(".num");
let Price = document.querySelector(".price");
let total = document.querySelector(".total");
let commande = document.querySelector(".btn");

const tabProduct = [
    {
      id: 1,
      product: "im1.jpg",
      title: "Sandale",
      price: 3,
    },
    {
      id: 2,
      product: "im2.jpg",
      title: "Sandale",
      price: 89.99,
    },
    {
      id: 3,
      product: "im3.jpg",
      title: "Sandale",
      price: 100.99,
    },
    {
      id: 4,
      product: "im4.jpg",
      title: "Sandale",
      price: 89.99,
    },
    {
      id: 5,
      product: "im5.jpg",
      title: "Sandale",
      price: 100.99,
    },
    {
      id: 6,
      product: "im6.jpg",
      title: "Sandale",
      price: 80.99,
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
let urlComplet = window.location.pathname;
let buttons = document.querySelectorAll(".card button");
let cards = document.querySelectorAll(".carte");
console.log(cards);
for (i = 0; i < tabProduct.length; i++) {
  for (i = 0; i < buttons.length; i++) {
    let test = tabProduct[i];
    let btn = buttons[i];
    buttons[i].addEventListener("click", function () {
      window.location.href = "http://127.0.0.1:5500/ajout.html";
      container.style.padding = "40px";
      console.log(test);
      header.innerHTML = "";
      text.innerHTML = "";
      container.innerHTML = `<div class="row ">
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

      // Ajout au panier
      let btnAdd = document.querySelector(".btnCart");
      let n = 1;
      let p;
      btnAdd.addEventListener("click", function () {
        p = panier.innerHTML = n++;
        modalTitle.innerHTML = `<h6 class="text-dark">Ton panier ${p} produit</h6>`;
        product.innerHTML = `<h6>${test.title}</h6>`;
        prix.innerHTML = `<p>${test.price} $</p>`;
        num.innerHTML = `<p>${p}</p> `;
        let totalAchat = test.price * p;
        total.innerHTML = `<p>${totalAchat} $</p> `;
      });
      // Finaliser la commande
      commande.addEventListener("click", function () {
        container.innerHTML = `
        <div class="row  mt-5 mb-5 justify-content-center align-items-center">
        <!-- Formulaire -->
        <div class=" bg-white infos shadow-lg  rounded-2 p-4">
            <!--  -->
            <h1>Tes coordonnées</h1>
            <div class="row">
                <form>
                    <div class="col">
                        <label class="fw-bold mb-2">Prenom</label>
                        <input type="text" required="required" class="rounded w-100 p-1" id="prenom" required>
                    </div>
                    <div class="col">
                        <label for="" class="fw-bold  mb-2">Nom</label>
                        <input type="text" required="required" class="rounded  w-100  p-1" id="nom">
                    </div>
            </div>
            <!--  -->
            <div class="row mt-3">

                <div class="col">
                    <label for="" class="fw-bold  mb-2">Somme</label>
                    <input type="text" required="required" class="rounded  w-100  p-1" id="somme">
                </div>
              


            </div>
            <!--  -->
            <div class="row">
            <div class="col">
               
            <label for="" class="fw-bold  mb-2 mt-3 ">Payment Method</label>
            <select name="" id="select" required class="w-100 p-1 rounded" class="rounded">
                <option value="depot">Carte de crédit</option>
                <option value="retrait">Payement à la livraison</option>
      
        </div>
        <div>
            <button id="submit" class=" w-100 border-0 mt-4 p-2 rounded shadow">Validez</button>
        </div>
            </div>
           
           
            </form>
            
        </div>
    </div>
        `;
      });
    });
  }
}

// console.log(urlComplet);