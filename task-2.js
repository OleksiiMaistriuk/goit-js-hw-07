const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');

const list = ingredients.map(ingredient => {
  const createList = document.createElement('li');
  createList.textContent = ingredient;
  return createList;
});
ingredientsList.append(...list);
