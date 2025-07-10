const breakfastMenu = [
  { itemName: 'Pancakes', price: 'R' + 20 },
  { itemName: 'Eggs Benedict', price: 'R' + 22.99 },
  { itemName: 'Oatmeal', price: 'R' + 15 },
  { itemName: 'Frittata', price: 'R' + 18.5 }
];

const mainCourseMenu = [
  { itemName: 'Steak', price: 'R' + 80 },
  { itemName: 'Pasta', price: 'R' + 60 },
  { itemName: 'Burger', price: 'R' + 55 },
  { itemName: 'Salmon', price: 'R' + 90 }
];

const dessertMenu = [
  { itemName: 'Cake', price: 'R' + 25 },
  { itemName: 'Ice Cream', price: 'R' + 20 },
  { itemName: 'Pudding', price: 'R' + 18 },
  { itemName: 'Fruit Salad', price: 'R' + 15 }
];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item.itemName} -- ${item.price}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML; 

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item.itemName} -- ${item.price}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem; 

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i].itemName} -- ${dessertMenu[i].price}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;