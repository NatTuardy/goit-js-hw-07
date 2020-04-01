// Напиши скрипт, который реагирует на
// изменение значения input#font-size-control
// (событие input) и изменяет инлайн-стиль span#text
// обновляя свойство font-size. В результате при
//  перетаскивании ползунка будет меняться размер текста.

/* <input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span> */

const inputFind = document.getElementById('font-size-control');
const text = document.getElementById('text').style;

inputFind.addEventListener('input', makeBiggerText);
function makeBiggerText(e) {
  const inputE = e.target.value;

  if (e.target.value) {
    text.fontSize = inputE + 'px';
  }
}
