// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в
// ul#categories, то есть элементов li.item. Получится
// 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
//  найдет и выведет в консоль текст заголовка элемента
//   (тега h2) и количество элементов в категории
//    (всех вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

const myList = document.querySelector("#categories");
console.dir(myList.children.length);
const myList2 = myList.querySelectorAll(".item");
console.log(myList2);
myList2.forEach(item => {
  const itemsName = item.querySelector("h2").textContent;
  const allItems = item.querySelectorAll("li").length;
  console.log(itemsName);
  console.log(allItems);
});
// const myList3 = myList2.querySelectorAll("li");
// console.log(myList3);
// let count = 0;

// const findCateg = items => {
//   const itemsLength = items.querySelectorAll("li").length;
//   return console.log(itemsLength);
//   const itemsName = item.querySelector("h2").textContent;
//   //   retutn items.forEach(item => console.log("Категория:", itemsLength));
// };
// findCateg(myList);
// const itemsLength = item.querySelectorAll("li").length;
// console.log(itemsLength);
// myList3.forEach(num => console.log(num));

// const getUsersWithAge = (users, min, max) => {
//     return users.filter(item => item.age > min && item.age < max);
//   };
// console.log(myList.children);
// console.dir(myList.children[0].children);
// console.dir(myList.children[0].children[0]);
// console.dir(myList.children[0].children[0].textContent);
// console.dir(myList.children[0].children[1].children.length);
// console.dir(myList.children[1].children[0].textContent);
// console.dir(myList.children[1].children[1].children.length);
// console.dir(myList.children[2].children[0].textContent);
// console.dir(myList.children[2].children[1].children.length);
// +++++++++++++++++++++++++++++++++++++++++

// let array = ["Andrey", "Nikita", "Natasha", "Sergey"];

// const myDiv = document.querySelector("#block");

// const fragment = document.createDocumentFragment();

// for (const item of array) {
//   const insetP = document.createElement("p");
//   insetP.innerText = item;
//   fragment.prepend(insetP);
// }

// myDiv.append(fragment);

// const elemArr = myDiv.querySelectorAll("p");
// console.log(elemArr[2]);

// // myDiv.remove(elemArr[1]);
// // elemArr[1].parentElement.removeChild(elemArr[1]);

// const newArray = [...elemArr];
// console.log(newArray);
// let findIndex = null;
// newArray.map((item, index) => {
//   if (item.textContent === "Andrey") {
//     findIndex = index;
//   }
// });

// if (findIndex !== null) {
//   elemArr[findIndex].remove();
// }

// console.log(newArray);

// +++++++++++++++++++++

// const ulList = document.querySelector("#list");

// const arrLi = document.querySelectorAll("#list li");
// console.log(arrLi);

// for (const item of arrLi) {
//   item.addEventListener("click", () => {
//     item.remove(this);
//   });
// }

// ++++++++++++2 - 1+++++++++

// const arrLi = document.querySelectorAll("#list li");
// console.log(arrLi);

// const arr = [...arrLi];
// console.log(arr);

// document.querySelector("#list").addEventListener("click", e => {
//   e.target.remove(this);

// });

// for (const item of arrLi) {
//   item.addEventListener("click", () => {
//     item.remove(this);
//   });
// }

// document.querySelector("#list").addEventListener("mouseover", e => {
//   e.target.style.color = "red";
// });

// document.querySelector("#list").addEventListener("mouseout", e => {
//   e.target.style.color = "green";
// });

// const div = document.querySelector("div");
// document.querySelector("#list").addEventListener("click", e => {
//   div.textContent = e.target.dataset.index;
// });

// +++++++++++++++++++++++++++++++++
// const myList = document.querySelector("#list");
// myList.addEventListener("click", addInput);
// function addInput(e) {
//   const myInput = document.createElement("input");
//   myInput.value = e.target.textContent;
//   e.target.textContent = "";
//   myInput.style.border = "1px solid red";
//   e.target.append(myInput);
//   myList.removeEventListener("click", addInput);
//   myInput.addEventListener("blur", event => {
//     e.target.textContent = event.target.value;
//     myInput.removeEventListener("blur", even => {
//       e.target.textContent = event.target.value;
//     });
//     myList.addEventListener("click", addInput);
//     // myInput.remove();
//   });
// }
