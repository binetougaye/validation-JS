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
    title:"costume africain",
    price: "30.000F",
    // voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`
   
  },
  {
    id: 2,
    image: "garcon2.jpg",
    title: "costume africain",
    price: "30.000F",
    // voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`
  },
  {
    id: 3,
    image: "garcon4.jpg",
    title: "costume africain",
    price: "30.000F",
    // voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`
  },
  {
    id: 4,
    image: "garcon6.jpg",
    title: "costume africain",
    price: "30.000F",
    // voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`,
  },
  {
    id: 5,
    image: "garcon7.jpg",
    title: "costume africain",
    price: "30.000F",
    // voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`,
  },
  {
    id: 6,
    image: "garcon10.jpg",
    title: "costume africain",
    price: "30.000F",
    // voir:` <button class="w-100  p-1 ajout" onclick="voir()">Voir produit</button>`,
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
              <button id="${item.id}">Voir le produit</button>
               
                </div>
            </div>
        </div>
    </div>
  </div>`
)

// let urlComplet = window.location.pathname;
let buttons = document.querySelectorAll(".card button");
let cards = document.querySelectorAll(".carte");
let div=document.querySelector(".bg")
  let h1=document.querySelector(".text")
  let footer=document.querySelector("footer")
  let back=document.querySelector(".bgHeader")
  console.log(back);
console.log(cards);
for (i = 0; i < menImage.length; i++) {
  for (i = 0; i < buttons.length; i++) {
    let test = menImage[i];
    // let btn = buttons[i];
    buttons[i].addEventListener("click", function () {
      container.style.backgroundColor = "write";
      container.style.boxShadow = "12px 12px 2px 1px rgba(0, 0, 255, .2)";
      container.style.padding = "40px";
      // urlComplet = "/ajout.html";
      console.log(test);
    //back.style.display="none"
       h1.innerHTML="";
       footer.innerHTML="";
      container.innerHTML = `<div class="row">
      <div class="col-lg-6">
      <img style="width:200px " src="images/${test.image}" class="me-5 ">
      </div>
      <div class="col-lg-6">
        <h1 class="text-warning">${test.title}</h1>
        <p>Sold by: bell gueule</p>
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
      let panier =document.querySelector(".bi-bag")
      let btnAdd = document.querySelector(".btnCart");
      let n = 1;

      //let 
      let init;
      btnAdd.addEventListener("click", function () {
        init= panier.innerHTML = n++; 
      });
      
      panier.addEventListener("click",()=>{
        container.innerHTML=`<h2>ton panier ${init}</h2>`
        container.innerHTML =`


        <div class="row">
      <div class="col-lg-6">
      <h1 class="text-black fs-5">${test.title}</h1>
      </div>
      <div class="col-lg-6">
        <h1 class="text-black fs-6">${test.price}</h1>
        <div class="row d-flex align-items-center">
        //   <div class="col">
        //   <label class="text-secondary">Size: </label>
        //   </div>
        //   <div class="col">
          
        // </div>
      </div>

     
      <button class="w-100 mt-5 border-0 btnCart">finaliser ta commande</button>
      </div>
     
      </div>
      </div>
        `
       
     })
    });
  }
}



  
//   let button = document.querySelectorAll(".card button");
//   console.log(button);
//   let div=document.querySelector(".bg")
//   let h1=document.querySelector(".text")
//   let footer=document.querySelector("footer")
//   console.log(button);
//    for (i = 0; i < button.length; i++) {
//      button[i].addEventListener("click", function () {
//        container.innerHTML="";
//        div.innerHTML="";
//        h1.innerHTML="";
//        footer.innerHTML="";

//     div.innerHTML +=`

//     `

//     });
//   }





 

