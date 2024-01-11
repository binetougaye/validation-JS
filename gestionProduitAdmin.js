
function Products(photos, nom, tail, prix ) {
    this.photos = photos,
    this.nom = nom,
    this.tail = tail,
    this.prix = prix
    // this.action = action
}

const product1 = new Products('./images/tenu1.jpg','Jordan','M',20000);
const product2 = new Products('./images/tenu2jpeg.jpeg','Paul','S',15000);
const product3 = new Products('./images/tenue3.jpeg','Castel','L',10000);
const product4 = new Products('./images/tenue4.jpeg','Hope','S',14000);
const product5 = new Products('./images/tenu5.jpeg','Star','X',18000);
const product6 = new Products('./images/tenu7.jpeg','Force','W',13500);
const product7 = new Products('./images/tenu8.jpeg','Ken','M',24000);
const product8 = new Products('./images/tenu9.jpg','Vost','L',34000);
const product9 = new Products('./images/tenu10.jpeg','Best','X',25000);
const product10 = new Products('./images/tenue3.jpeg','Cost','S',35000);

let products = [];
products.push(product1, product2, product3, product4, product5, product6, product7 ,product8,product9,product10);
 
function populateTableList() {
    let listOfProducts = '';
    
    products.forEach((prod, index) => {
        listOfProducts += `
        <tr class="text-center">
            <td><img src="${prod.photos}" class="img-fluid img-thumbnail w-10"></td>
            <td>${prod.nom}</td>
            <td>${prod.tail}</td>
            <td>${prod.prix}</td>
            
            <td class="">
                <button class="btn btn-secondary" onclick="editTask(${index}'edit')">Modifier</button>
                <button class="btn btn-secondary" onclick="removeTask(${index} 'remove')">Supprimer</button>
            </td>
        </tr>
        `;
    });

    document.getElementById('productList').innerHTML = listOfProducts;
}

// 

function editTask(index) {
    // Logique pour ajouter le produit au panier en utilisant l'index
    console.log('Ce produit est ajouté:', products[index]);
}

function removeTask(index) {
    // Logique pour supprimer le produit en utilisant l'index
    console.log('Ce produit est supprimé:', products[index]);
}



// Fonction générique pour gérer les actions sur une tâche (modifier ou supprimer)


// ...

// // Boutons dans votre code HTML
// <button class="btn btn-secondary" onclick="manageTask(${index}, 'edit')">Modifier</button>
// <button class="btn btn-secondary" onclick="manageTask(${index}, 'remove')">Supprimer</button>




