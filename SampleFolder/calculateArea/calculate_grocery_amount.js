const addAdditionalItems = document.getElementById('add-additional-items'); 
let itemCount = 2; 

const addGroceryItem = (e) => { 
    e.preventDefault(); 

    itemCount += 1; 

    const groceryList = document.querySelector('.grocery-list');
    const listElem = document.createElement('li'); 
    const articleElem = document.createElement('article'); 
    const labelNameElem = document.createElement('label'); 
    const inputNameElem = document.createElement('input') 
    const labelPriceElem = document.createElement('label'); 
    const inputPriceElem = document.createElement('input') 

    listElem.classList.add('grocery-item'); 
    articleElem.classList.add('inline-input');  

    labelNameElem.setAttribute('for', `item-name-${itemCount}`);
    labelNameElem.textContent = 'Item name';  

    inputNameElem.setAttribute('type', 'text'); 
    inputNameElem.id = `item-name-${itemCount}`;
    inputNameElem.name = `items[${itemCount}][name]`;
    inputNameElem.placeholder = "Enter the name of your item"; 

    labelPriceElem.setAttribute('for', `item-price-${itemCount}`); 
    labelPriceElem.textContent = 'Item price'; 
        
    inputPriceElem.setAttribute('type', 'number');
    inputPriceElem.id = `item-price-${itemCount}`; 
    inputPriceElem.name = `items[${itemCount}][price]`; 
    inputPriceElem.placeholder = "Enter the price of your item"; 

    const nameVal = document.getElementById('add-item').value;
    const priceVal = document.getElementById('price').value;
    inputNameElem.value = nameVal;
    inputPriceElem.value = priceVal; 

    nameVal.value = '' 
    priceVal.value = 0


    listElem.appendChild(articleElem); 
    articleElem.appendChild(labelNameElem);
    articleElem.appendChild(inputNameElem); 
    articleElem.appendChild(labelPriceElem);
    articleElem.appendChild(inputPriceElem); 

    groceryList.appendChild(listElem); 
}

addAdditionalItems.addEventListener('submit', addGroceryItem);
