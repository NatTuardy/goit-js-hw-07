// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];
// Напиши скрипт, который для каждого элемента
// массива ingredients создаст отдельный li,
// после чего вставит все li за одну операцию в
// список ul.ingredients. Для создания DOM-узлов
//  используй document.createElement().

const myIng = document.querySelector("#ingredients");
console.log(myIng);

// const myLi = document.createElement("li");
// console.log(myLi);
// myLi.textContent = ingredients[0];
// console.log(myLi);
// myIng.appendChild(myLi);
// console.log(myIng);

const fn2 = array => {
  console.log(array);
  const allItems = array.map(item => {
    const myLi = document.createElement("li");
    myLi.textContent = item;
    // console.log(myLi);
    return myLi;
  });
  console.log(allItems);
  myIng.append(...allItems);
};

fn2(ingredients);
