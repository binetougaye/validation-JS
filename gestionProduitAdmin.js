
var products = [
  {
    name: "Produit 1",
    description: "Talon long 9",
    price: 10000,
    photo: "./images/MAKET-600x600.jpg"
  },
  {
    name: "Produit 2",
    description: "Mini Talon",
    price: 10000,
    photo: "./images/sandales-a-talons-avec-lacets-600x600.jpg"
  },
  // Ajoutez d'autres produits
];

function displayProducts() {
  var productListDiv = document.getElementById("product-list");
  productListDiv.innerHTML = "";

  products.forEach(function(product, index) {
    var productDiv = document.createElement("div");
    productDiv.className = "card";
    productDiv.innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>Prix: ${product.price} CFA</p>
      <img src="${product.photo}" alt="${product.name}">
      <div class="card-buttons">
        <button onclick="editProduct(${index})">Modifier</button>
        <button onclick="deleteProduct(${index})">Supprimer</button>
      </div>
    `;
    productListDiv.appendChild(productDiv);
  });
}

function addProduct() {
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var price = parseFloat(document.getElementById("price").value);
  var photoInput = document.getElementById("photo");
  var photo = photoInput.files[0];

  if (name && description && !isNaN(price) && photo) {
    var newProduct = {
      name: name,
      description: description,
      price: price,
      photo: URL.createObjectURL(photo)
    };

    products.push(newProduct);
    displayProducts();

    // Effacer les champs du formulaire après l'ajout
    document.getElementById("product-form").reset();
  } else {
    alert("Veuillez remplir tous les champs du formulaire.");
  }
}

function editProduct(index) {
  var newName = prompt("Entrez le nouveau nom du produit:", products[index].name);
  if (newName !== null) {
    products[index].name = newName;
    displayProducts();
  }
}

function deleteProduct(index) {
  var confirmDelete = confirm("Voulez-vous vraiment supprimer ce produit ?");
  if (confirmDelete) {
    products.splice(index, 1);
    displayProducts();
  }
}

displayProducts();
