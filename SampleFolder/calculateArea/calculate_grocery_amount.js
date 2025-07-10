const addAdditionalItems = document.getElementById('add-additional-items');
const groceryList = document.querySelector('.grocery-list');
const addItemInput = document.getElementById('add-item');
const addPriceInput = document.getElementById('price');
let itemCount = 2; 


const addGroceryItem = (e) => {
  e.preventDefault();
  itemCount += 1;

  const nameVal = addItemInput.value.trim();
  const priceVal = parseFloat(addPriceInput.value.trim());

  if (!nameVal || isNaN(priceVal)) {
    alert("Please enter valid item name and price.");
    return;
  }

  const listElem = document.createElement('li');
  const articleElem = document.createElement('article');
  const labelNameElem = document.createElement('label');
  const inputNameElem = document.createElement('input');
  const labelPriceElem = document.createElement('label');
  const inputPriceElem = document.createElement('input');

  listElem.classList.add('grocery-item');
  articleElem.classList.add('inline-input');

  labelNameElem.setAttribute('for', `item-name-${itemCount}`);
  labelNameElem.textContent = 'Item name';

  inputNameElem.type = 'text';
  inputNameElem.id = `item-name-${itemCount}`;
  inputNameElem.name = `items[${itemCount}][name]`;
  inputNameElem.value = nameVal;
  inputNameElem.placeholder = "Enter the name of your item";

  labelPriceElem.setAttribute('for', `item-price-${itemCount}`);
  labelPriceElem.textContent = 'Item price';

  inputPriceElem.type = 'number';
  inputPriceElem.id = `item-price-${itemCount}`;
  inputPriceElem.name = `items[${itemCount}][price]`;
  inputPriceElem.value = priceVal;
  inputPriceElem.placeholder = "Enter the price of your item";

  articleElem.appendChild(labelNameElem);
  articleElem.appendChild(inputNameElem);
  articleElem.appendChild(labelPriceElem);
  articleElem.appendChild(inputPriceElem);
  listElem.appendChild(articleElem);
  groceryList.appendChild(listElem);


  addItemInput.value = '';
  addPriceInput.value = '';
};

addAdditionalItems.addEventListener('submit', addGroceryItem);


const calculateTotalBtn = document.getElementById('calculate-total');
const totalDisplay = document.getElementById('total-display');

calculateTotalBtn.addEventListener('click', () => {
  const priceInputs = document.querySelectorAll('input[name^="items"][name$="[price]"]');
  let total = 0;

  priceInputs.forEach(input => {
    const value = parseFloat(input.value);
    if (!isNaN(value)) total += value;
  });

  totalDisplay.innerHTML = `<strong>Total:</strong> R${total.toFixed(2)}`;
});
