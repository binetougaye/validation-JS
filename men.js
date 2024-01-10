// Variables
// let modal = document.querySelector(".modal");
// let modalTitle = document.querySelector(".modal-title");
// let panier = document.getElementById("cart");
// let modalBody = document.querySelector(".modal-body");
//
// Fonction AJOUT dans le Panier
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
    image: "garcon8.jpg",
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
            <img style="height: 480px;" src="images/${item.image}" id="tt" class="shadow" alt="">
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
     <div class="row">

     </div>`
    });
  }

//   Fonction pour ajouter un produit au panier
  var cart=[];
  function addtocart(a){
      cart.push({...images[a]});
      displaycart();
  
  }
  //  Fonction pour supprimer un élément du panier
  function delElement(a){
      cart.splice(a, 1);
      displaycart();
  
  }
  // afficher le contenu du panier
  function displaycart(a){
      let j=0 , total= 0;
      document.getElementById("count").innerHTML=cart.length;
      if(cart.length==0){
      document.getElementById('cartItem').innerHTML='Your cart is empty'
      document.getElementById("total").innerHTML="$"+0+".00";
  }else{
      document.getElementById('cartItem').innerHTML=cart.map((item)=>{
          var {image  ,price}=item;
          total=total+price;
          document.getElementById("total").innerHTML="$"+total+".00";
          return(
              `|<div class='cart-item'>
              <div class='row-img'>
              <img class='rowimg'src=${image}>
              
              </div>
              <p style='font-size:12px;'>${title}</p>
              <h2 style='font-size:15px;'>$ ${price}.00</h2>`+
              "<i class='fa-solid fa-trash' onclick='delElement("+(j++) +")'></i></div>"
          )
      }).join('')
  }
  }
 

