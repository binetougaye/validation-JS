var categories = [];
function displayCategory() {
    var categoryListDiv = document.getElementById("category-list");
    categoryListDiv.innerHTML = "";

    categories.forEach(function(category, index) {
        var categoryDiv = document.createElement("div");
        categoryDiv.className = "col-lg-4 col-md-6 mb-4";
        categoryDiv.innerHTML = `
            <div class="card">
                <img src="${category.photo}" class="card-img-top" alt="${category.name}">
                <div class="card-body">
                    <h5 class="card-title text-center">${category.name}</h5>
                    <p class="card-text text-center">${category.price} CFA</p>
                    <button class="  m-auto  add" onclick="Look()">Ajouter</button>
                    <div class="d-flex justify-content-between mt-3">
                    <button class=" add" onclick="modifyCategory(${index})">Modifier</button>
                    <button class="add" onclick="deleteCategory(${index})">Supprimer</button>
                    </div>
                </div>
            </div>
        `;
        categoryListDiv.appendChild(categoryDiv);
    });
}
function Look() {
    window.location.href = "file:///C:/Users/Lenovo/Documents/Bakeli/Javascript/T%C3%A2che-de-Validation-Javascript/validation-JS/achats.html"
}        
function addCategory() {
    var name = document.getElementById("categoryName").value;
    var price = parseFloat(document.getElementById("categoryPrice").value);
    var imageInput = document.getElementById("categoryImage");
    var image = imageInput.files[0];
    if (name && !isNaN(price) && image) {
        var newCategory = {
            name: name,
            price: price,
            photo: URL.createObjectURL(image)
        };

        categories.push(newCategory);
        displayCategory();
        document.getElementById("category-form").reset();
    } else {
        alert("Please remplissez les champs");
    }
}

function modifyCategory(index) {
    var newName = prompt("Entrer la nouvelle catégorie:", categories[index].name);
    if (newName !== null) {
      categories[index].name = newName;
      displayCategory();
    }
}
function deleteCategory(index) {
    var confirmDelete = confirm("Etes-vous sûr de vouloir supprimer cette catégorie");
    if (confirmDelete) {
        categories.splice(index, 1);
        displayCategory();
   }
}
displayCategory();











        var categories = [
            {
                name: "Baskets",
            },
            {
                name: "Montres",
            }
        ];

        function displayCategories() {
            var categoryList = document.getElementById("category-list");

            categories.forEach(function(category) {
                var categoryElement = document.createElement("div");
                categoryElement.className = "col-md-4 mb-4";
                categoryElement.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${category.name}</h5>
                        </div>
                    </div>
                `;

                categoryList.appendChild(categoryElement);
            });
        }

        window.onload = function() {
            displayCategories();
            // Appeler la fonction pour afficher les catégories au chargement de la page
        };












        function displayCategories() {
            var categoryList = document.getElementById("category-list");

            categories.forEach(function(category) {
                var categoryElement = document.createElement("div");
                categoryElement.className = "col-md-4 mb-4";
                categoryElement.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${category.name}</h5>
                            <button type="button" class="btn btn-primary" onclick="openProductModal('${category.name}')">Afficher Produits</button>
                        </div>
                    </div>
                `;

                categoryList.appendChild(categoryElement);
            });
        }

        function openProductModal(categoryName) {
            var category = categories.find(c => c.name === categoryName);

            var modalBody = document.getElementById("productModalBody");
            modalBody.innerHTML = ""; // Clear previous content

            category.products.forEach(function(product) {
                var productCard = document.createElement("div");
                productCard.className = "card";
                productCard.innerHTML = `
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <button type="button" class="btn btn-info" onclick="editProduct('${product.name}')">Modifier</button>
                        <button type="button" class="btn btn-danger" onclick="deleteProduct('${product.name}')">Supprimer</button>
                    </div>
                `;

                modalBody.appendChild(productCard);
            });

            // Show the modal
            var productModal = new bootstrap.Modal(document.getElementById('productModal'));
            productModal.show();
        }

        function editProduct(productName) {
            console.log("Modifier le produit:", productName);
        }

        function deleteProduct(productName) {
            console.log("Supprimer le produit:", productName);
        }

        window.onload = function() {
            displayCategories();
        };









