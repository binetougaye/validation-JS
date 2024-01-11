let items = [];

function addItem() {
  const itemNameInput = document.getElementById('itemName');
  const itemImageInput = document.getElementById('itemImage');
  const itemPriceInput = document.getElementById('itemPrice');

  const itemName = itemNameInput.value.trim();
  const itemImage = itemImageInput.files[0];
  const itemPrice = itemPriceInput.value;

  if (itemName !== '' && itemImage && itemPrice !== '') {
    // Ajouter un nouvel élément à la liste
    items.push({
      name: itemName,
      image: itemImage,
      price: itemPrice
    });

    // Mettre à jour l'affichage
    renderItems();

    // Effacer les champs de saisie
    itemNameInput.value = '';
    itemImageInput.value = null;
    itemPriceInput.value = '';
  }
}

function editItem(index) {
  const newItemName = prompt('Modifier le nom de l\'élément :', items[index].name);

  if (newItemName !== null) {
    items[index].name = newItemName;
    renderItems();
  }
}

function deleteItem(index) {
  items.splice(index, 1);
  renderItems();
}

function renderItems() {
  const itemTable = document.getElementById('itemList');
  itemTable.innerHTML = '';

  items.forEach((item, index) => {
    const row = itemTable.insertRow();
    const cellIndex = row.insertCell(0);
    const cellName = row.insertCell(1);
    const cellImage = row.insertCell(2);
    const cellPrice = row.insertCell(3);
    const cellActions = row.insertCell(4);

    cellIndex.textContent = index;
    cellName.textContent = item.name;
    cellImage.innerHTML = `<img src="${URL.createObjectURL(item.image)}" alt="Item Image" style="max-width: 50px; max-height: 50px;">`;
    cellPrice.textContent = item.price;
    cellActions.innerHTML = `
      <button onclick="editItem(${index})"><i class="fas fa-edit "></i></button>
      <button onclick="deleteItem(${index})"><i class="red fas fa-trash-alt #ff0000"></i></button>
    `;
  });
}

// Appel initial pour afficher les éléments existants
renderItems();
