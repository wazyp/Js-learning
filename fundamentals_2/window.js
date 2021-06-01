const heightOutput = document.querySelector('.height');
const widthOutput = document.querySelector('.width');
const conteiner = document.getElementById('para');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;

function hasInnerHtml (node) {
  return !!node.innerHTML;
}

function changeElements() {
  conteiner.firstElementChild.innerHTML = 'Changed 1 ';
  conteiner.firstElementChild.nextElementSibling.innerHTML = 'Changed 4 ';
  conteiner.lastElementChild.innerHTML = 'Changed 2';
  conteiner.lastElementChild.previousElementSibling.innerHTML = ' Changed 3 ';
  const newElement = document.createElement('p');
  newElement.innerHTML = ' Added';
  conteiner.lastElementChild.parentNode.appendChild(newElement);

  conteiner.childNodes.forEach(function (node) {
    if (node.innerHTML) {
      console.log(node.innerHTML);
    }
  });
}

window.onload = changeElements;
