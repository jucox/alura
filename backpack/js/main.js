const newItemForm = document.querySelector('#new-item');
const listOfItems = document.querySelector('#list');
const items = JSON.parse(localStorage.getItem('items')) || [];

items.forEach((element) => {
    createNewItemElement(element);
})

newItemForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const itemName = event.target.elements['nome'];
    const itemQuantity = event.target.elements['quantidade'];

    const existingItem = items.find(element => element.name === itemName.value)

    const currentItem = {
        'name': itemName.value,
        'quantity': itemQuantity.value
    }

    if (existingItem) {
        currentItem.id = existingItem.id;
        
        updateItem(currentItem);

        items[items.findIndex(element => element.id === existingItem.id)] = existingItem;
    } else {
        currentItem.id = items[items.length - 1] ? items[items.length - 1].id + 1: 0;

        createNewItemElement(currentItem);

        items.push(currentItem);
    }

    localStorage.setItem('items', JSON.stringify(items));

    itemName.value = "";
    itemQuantity.value = "";
})

function createNewItemElement (item) {
    const newItem = document.createElement('li');
    newItem.classList.add('item');

    const newItemQuantity = document.createElement('strong');
    newItemQuantity.innerHTML = item.quantity;
    newItemQuantity.dataset.id = item.id;

    newItem.appendChild(newItemQuantity);
    newItem.innerHTML += item.name;
    
    newItem.appendChild(deleteButton(item.id));
    listOfItems.appendChild(newItem);
}

function updateItem (item) {
    document.querySelector(`[data-id="${item.id}"]`).innerHTML = item.quantity;
}

function deleteButton (id) {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = 'X';

    buttonElement.addEventListener('click', function() {
        deleteElement(this.parentNode, id);
    });

    return buttonElement;
}

function deleteElement (tag, id) {
    tag.remove();

    items.splice(items.findIndex(element => element.id === id), 1);

    localStorage.setItem('items', JSON.stringify(items));
}