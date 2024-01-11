// Variables
// let modal = document.querySelector(".modal");
// let modalTitle = document.querySelector(".modal-title");
// let panier = document.getElementById("cart");
// let modalBody = document.querySelector(".modal-body");
//
// Fonction AJOUT produit
let container = document.querySelector(".pro");
const menImage = [
  {
    id: 1,
    image: "garcon1.jpg",
    price: 59.99,
    voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`
   
  },
  {
    id: 2,
    image: "garcon2.jpg",
    title: "Pull-over torsadé foil",
    price: 59.99,
    voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`
  },
  {
    id: 3,
    image: "garcon4.jpg",
    title: "Cardigan liserés contrastants",
    price: 79.99,
    voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`
  },
  {
    id: 4,
    image: "garcon6.jpg",
    title: "Pull-over oversize col V",
    price: 69.99,
    voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`,
  },
  {
    id: 5,
    image: "garcon7.jpg",
    title: "test",
    price: 69.99,
    voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`,
  },
  {
    id: 6,
    image: "garcon10.jpg",
    title: "test",
    price: 69.99,
    voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`,
  },
];
container.innerHTML = ""
let images = menImage.map((item)=>
container.innerHTML += `<div class="">
    <div class="">
        <div class="card border-0 ms-5 ">
            <img style="height: 480px; width:250px" src="images/${item.image}" id="tt" class="shadow" alt="">
            <div class="card-body">
                <h4 class="clothes text-white fw-bold"></h4>
                <div class="d-flex mt-2 justify-content-center align-items-center">
                 ${item.voir}
                </div>
            </div>
        </div>
    </div>
  </div>`
)

  
  let button = document.querySelectorAll(".ajout");
  let div=document.querySelector(".bg")
  let h1=document.querySelector(".text")
  let footer=document.querySelector("footer")
  console.log(button);
   for (i = 0; i < button.length; i++) {
     button[i].addEventListener("click", function () {
       container.innerHTML="";
       div.innerHTML="";
       h1.innerHTML="";
       footer.innerHTML="";

    div.innerHTML +=`
//     <div class="container">
//     <div id="root"></div>
//    <div class="sidebar d-flex justify-content-around">
//     <img src="images/garcon1.jpg" alt="" class="PRE1">
//     <!-- <div class="head"><p>My Cart</p></div> -->
//     <div id="cartItem">Your cart is empty</div>
//     <div class="foot">
//         <h3>Total</h3>
//         <h2 id="total">$ 0.00</h2>
//     </div>
//    </div>
// </div>`
    });
  }


 

