let container = document.querySelector(".container");
const talonlacet = [
      { 
        id: 1,
        image: "talonsLacets1.png",
        title: "talon lacet  rose",
        price: "5.000 CFA",
},
    {
        id: 2,
        image: "talonsLacets2.png",
        title:"talon lacet blanc",
        price: "5.000 CFA",
      
    },

    {
        id: 3,
        image: "talonsLacets3.png",
        title:"talon lacet marron",
        price: "5.000 CFA",
    },

    {
        id:4,
        image:"talonsLacets4.png",
        title :"talon lacet noir",
        price :"8.000 CFA",
    },
    {
        id:5,
        image:"talonsLacets5.png",
        title :"talon lacet noir",
        price :"7.000 CFA",
    },
    {
        id:6,
        image:"talonsLacets6.png",
        title :"talon lacet noir",
        price :"8.000 CFA",
    },

]
const add =document.getElementById('btn');
add.addEventListener('click',() =>{
const talon =talonlacet.map((shoes) => 
`
<div class="product m-4">
    <img src="talonsLacets/${shoes.image}" alt="${shoes.title}">
    <p class="text-center title">${shoes.title}<p>
    <p class="text-center  text-secondary">${shoes.price}</p>
    <button class="  m-auto  add" onclick="Look()">Ajouter au panier</button>
  </div>
  
`);

container.innerHTML =talon;

})




