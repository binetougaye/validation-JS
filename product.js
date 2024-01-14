function showProducts(category) {
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (category === 'homme') {
        modalTitle.innerText = 'Produits pour Homme';
        modalBody.innerHTML = '<p>Description des produits pour homme</p>' +
            '<img src="./img/men1.jpeg" alt="Homme 1" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +
            
            '<img src="./img/men3.jpeg" alt="Homme 1" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +

            '<img src="./img/men2.jpeg" alt="Homme 2" class="small-image">' +
            '<input type="checkbox" class="product-checkbox">';


            
    } else if (category === 'femme') {
        modalTitle.innerText = 'Produits pour Femme';
        modalBody.innerHTML = '<p>Roberouge  Prix:120$</p>' +
            '<img src="./images/roberouge.jpg" alt="Femme 2" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +
            


            ' <p>Robemarron  Prix:100$</p>'+
            '<img src="./images/robemarron.jpg" alt="Femme 3" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +

            '<img src="./images/yellowDress.jpg" alt="Femme 4" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +

            '<img src="./images/redDress.jpg" alt="Femme 5" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +

            '<img src="./images/jupe.jpg" alt="Femme 6" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +

            '<img src="./images/street1.jpg" alt="Femme 7" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +

            '<img src="./images/street2.jpg" alt="Femme 8" class="small-image">' +
            '<input type="checkbox" class="product-checkbox"> ' +

            '<img src="./images/street4.jpg" alt="Femme 9" class="small-image">' +
            '<input type="checkbox" class="product-checkbox">';
    }

    $('#productModal').modal('show');
}

function addSelectedProducts() {
    const selectedProductsContainer = document.getElementById('selectedProducts');
    const checkboxes = document.querySelectorAll('.product-checkbox:checked');

    checkboxes.forEach(checkbox => {
        const productImage = checkbox.previousElementSibling;
        const newProduct = document.createElement('div');
        newProduct.className = 'selected-product';
        newProduct.innerHTML = '<div class="d-flex align-items-center">' +
            '<img src="' + productImage.src + '" alt="Selected Product" class="large-image">' +
            
            '<button class="btn btn-danger btn-sm ml-2" onclick="removeProduct(this)">Supprimer</button>' +
            '</div>';
        selectedProductsContainer.appendChild(newProduct);
    });

    $('#productModal').modal('hide');
}

function removeProduct(button) {
    const selectedProductsContainer = document.getElementById('selectedProducts');
    const productContainer = button.parentElement.parentElement;
    selectedProductsContainer.removeChild(productContainer);
}


