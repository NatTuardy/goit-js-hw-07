// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в
// список ul.ingredients. Для создания DOM-узлов
//  используй document.createElement().

const myIng = document.querySelector('#ingredients');
const fn2 = array => {
  const allItems = array.map(item => {
    const myLi = document.createElement('li');
    myLi.textContent = item;
    return myLi;
  });
  myIng.append(...allItems);
};
fn2(ingredients);
