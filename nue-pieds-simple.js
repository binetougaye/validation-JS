let container = document.querySelector(".container");
const infoimage = [
    {
        id: 1,
        image: "images/img1.jpeg",
        title: "Nues  pied noir",
        price: "6.000 CFA",


    },
    {
        id: 2,
        image: "images/img2.jpeg",
        title: "Nues-pied noir simple",
        price: "4.000 CFA",


    },

    {
        id: 3,
        image: "images/img3.jpeg",
        title: "Nues pied simple",
        price: "5.000 CFA",
    },

    {
        id: 4,
        image: "images/img4.jpeg",
        title: "Nues  pied simple",
        price: "5.000 CFA",
    },
    {
        id: 5,
        image: "images/img5.jpeg",
        title: "Nues  pied simple",
        price: "3.000 CFA",
    },
    {
        id: 6,
        image: "images/img6.jpeg",
        title: "Nues  pied simple",
        price: "3.000 CFA",
    },
    {
        id: 7,
        image: "images/img7.jpeg",
        title: "Nues  pied siple",
        price: "3.000 CFA",
    },
    {
        id: 8,
        image: "images/img8.jpeg",
        title: "Nues  pied simple",
        price: "4.000 CFA",
    },
    {
        id: 9,
        image: "images/img9.jpeg",
        title: "Nues  pied simple",
        price: "7.000 CFA",
    },
    {
        id: 10,
        image: "images/img10.jpeg",
        title: "Nues  pied simple",
        price: "3.500 CFA",
    },
    {
        id: 11,
        image: "images/img11.jpeg",
        title: "Nues  pied simple",
        price: "3.500 CFA",
    },
    {
        id: 12,
        image: "images/img12.jpeg",
        title: "Nues  pied simple",
        price: "4.000 CFA",
    },


];
const affichage = infoimage.map((item) =>
   `<div class="bloc m-4">
        
        <!-- Button trigger modal -->
        <button type="button" class="btn-image" data-bs-toggle="modal" data-bs-target="#exampleModal${item.id}">
        <img src="${item.image}" alt="${item.title}">
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal${item.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModal${item.id}Label">Detail produit</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body d-flex flex-wrap">
                <div class="me-3">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="ms-3">
                    <p>Prix: ${item.price}</p>
                    <p>Categories:Nue Pieds Simple</p>
                    <p>Nombre De pieces:</p>
                    <button class="btn btn-dark my-4">Ajouter au Panier <i class="bi bi-cart-fill"></i></button><br>
                    <a href="https://wa.me/775636854" target="_blank">
                        <button class="btn whatsaap">Commender Via WhatsApp <i class="bi bi-whatsapp"></i></button>
                    </a>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        <p class="text-center titre">${item.title}<p>
        <p class="text-center">${item.price}</p>
        <button class="rounded ajout" onclick="voir()">Ajouter au panier</button>
    </div>`
);

// affichage information
container.innerHTML = affichage;


