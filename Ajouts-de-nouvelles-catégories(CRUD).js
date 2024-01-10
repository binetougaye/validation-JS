const categories = ['Robes','Robes','Robes'];
const products = [
    { id: 1,
      category: 'Robes',
      name: 'Femmes'
},
{  id: 1,
   category: 'Prêt du corps',
   name: 'Hommes'
 
},
];
function initProductTable() {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';

    products.forEach(product => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${product.id}</td>
                         <td>${product.name}</td>
                         <td>${product.category}</td>
                         <td><button onclick="editProduct(${product.id})">Modifier</button>
                             <button onclick="deleteProduct(${product.id})">Supprimer</button></td>`;
    });
}
function initCategoryDropdown() {
    const categoryDropdown = document.getElementById('productCategory');
    categoryDropdown.innerHTML = '';

}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

function addProduct() {
    const productName = document.getElementById('productName').value;
    const productCategory = document.getElementById('productCategory').value;

    const newProductId = products.length + 1;

    const newProduct = { id: newProductId, name: productName, category: productCategory };
    products.push(newProduct);

    initProductTable();
    closeModal('addProductModal');
}
function deleteProduct(productId) {
    products.splice(products.findIndex(product => product.id === productId), 1);
    initProductTable();
}
