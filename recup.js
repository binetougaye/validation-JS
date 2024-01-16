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
                    <button class="  m-auto  add" onclick="Look()">Ajouter au panier</button>
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

