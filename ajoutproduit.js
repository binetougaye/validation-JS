// Fonction pour ajouter un produit
function addProduct() {
    // Récupérer les valeurs du formulaire
    var productName = document.getElementById('productName').value;
    var productDescription = document.getElementById('productDescription').value;
    var productPrice = document.getElementById('productPrice').value;
    var productImageInput = document.getElementById('productImage');
    var productImage = productImageInput.files[0]; // Récupérer le fichier image

    // Vérifier si une image a été sélectionnée
    if (productImage) {
        // Créer une nouvelle ligne dans le tableau
        var table = document.getElementById('productList');
        var newRow = table.insertRow();

        // Remplir les cellules de la nouvelle ligne
        newRow.insertCell(0).innerHTML = productName;
        newRow.insertCell(1).innerHTML = productDescription;
        newRow.insertCell(2).innerHTML = productPrice;

        // Afficher l'image
        var cellImage = newRow.insertCell(3);
        var reader = new FileReader();
        reader.onload = function (e) {
            cellImage.innerHTML = '<img src="' + e.target.result + '" alt="Product Image" width="50">';
        };
        reader.readAsDataURL(productImage);

        // Ajouter les icônes d'action
        var cellActions = newRow.insertCell(4);
        cellActions.innerHTML = '<i class="fas fa-trash-alt text-danger" onclick="deleteProduct(this)"></i>' +
                                '<i class="fas fa-edit text-warning" onclick="editProduct(this)"></i>' +
                                '<i class="fas fa-info-circle text-info" onclick="viewDetails(this)"></i>';

        // Réinitialiser le formulaire
        document.getElementById('productForm').reset();
    } else {
        alert("Veuillez sélectionner une image.");
    }
}

// Fonction pour supprimer un produit
function deleteProduct(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('productList').deleteRow(i);

    // Supprimer également l'élément correspondant sur la page d'accueil
    var productContainer = document.getElementById('productContainer');
    productContainer.removeChild(productContainer.childNodes[i]);
}

// Fonction pour modifier un produit
function editProduct(row) {
    var i = row.parentNode.parentNode.rowIndex;
    const newName = window.prompt('Enter a new name', document.getElementById('productList').rows[i].cells[0].innerHTML);
    if (newName !== null) {
        document.getElementById('productList').rows[i].cells[0].innerHTML = newName;
        updateRow(i - 1); // i - 1 car les indices de ligne commencent à 1, mais les indices du tableau commencent à 0
    }
}

// Fonction pour voir les détails d'un produit
function viewDetails(row) {
    // Implémentez la logique pour afficher les détails selon vos besoins
    alert("Fonction pour voir les détails d'un produit à implémenter");
}

// Fonction pour afficher un produit sur la page d'accueil
function displayProductOnHomepage(productName, productDescription, productPrice, productImage) {
    // Créer un conteneur pour afficher le produit sur la page d'accueil
    var productContainer = document.getElementById('productContainer');

    // Créer un élément de div pour chaque produit
    var productDiv = document.createElement('div');
    productDiv.className = 'product-item'; // Ajoutez une classe pour le style CSS si nécessaire

    // Créer un élément d'image
    var imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(productImage);
    imgElement.alt = 'Product Image';
    imgElement.width = 100;

    // Créer un élément de paragraphe pour afficher le nom, la description et le prix
    var infoParagraph = document.createElement('p');
    infoParagraph.innerHTML = '<b>Name:</b> ' + productName + '<br>' +
                              '<b>Description:</b> ' + productDescription + '<br>' +
                              '<b>Price:</b> $' + productPrice;

    // Ajouter l'image et les informations au conteneur
    productDiv.appendChild(imgElement);
    productDiv.appendChild(infoParagraph);
    productContainer.appendChild(productDiv);
}
