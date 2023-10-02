const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listUl = document.querySelector("#ingredients");
const items = ingredients.map(item => {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  return listItem;
})
listUl.append(...items);