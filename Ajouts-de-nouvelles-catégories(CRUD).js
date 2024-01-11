const categories = [];
function AjoutTable() {
    const tableBody = document.getElementById('productTableBody');
    tableBody.innerHTML = '';
    categories.forEach(category => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${category.id}</td>
                         <td>${category.name}</td>
                         <td><img src="image.jpg.jpg" alt="" width="50" height="50"></td>
                            <td> 
                            <button onclick="modifyCategory(${category.id})">Modifier</button>
                            <button onclick="deleteCategory(${category.id})">Supprimer</button>
                            </td>`;
    });
}
function addcategories() {
    const categoriesName = document.getElementById('productName').value;
    const newId = categories.length + 1;
    const newCategories = {
        id: newId,
        name: categoriesName,
        action: '',  
    };
    categories.push(newCategories);
    AjoutTable();
}
function modifyCategory(Id) {
    const categoryModify = categories.find(category => category.id === Id);
    const newName = prompt('Modify category name:', categoryModify.name);
    if (newName !== null) {
        categoryModify.name = newName;
        AjoutTable();
    }
}
function deleteCategory(Id) {
    categories.splice(categories.findIndex(category => category.id === Id), 1);
    AjoutTable();
}
