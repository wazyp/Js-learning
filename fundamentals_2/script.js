const bodyElement = document.querySelector('body');

const spanName = document.querySelector('#nickname');
const spanFavorites = document.querySelector('#favorites');
const spanHometown = document.querySelector('#hometown');//info-conteiner
const infoContainer = document.querySelector('.info-conteiner');

function changeSpans() {
  spanName.innerText = 'Deyan';
  spanFavorites.innerText = 'Pichenca';
  spanHometown.innerText = 'Ruse';
}

function appendImage() {
  const image = document.createElement('img');
  image.src = 'images/istock.jpg';
  image.width = '400';
  document.querySelector('.info-conteiner').appendChild(image);
}

function addClass() {
  const allListElements = infoContainer.querySelectorAll('li');
  console.log(allListElements);
  allListElements.forEach(function(item) {
    item.classList.add('listitem');
    console.log(item);
  } );
}

window.addEventListener('load', function () {
  bodyElement.style.fontFamily = 'Arial, sans-serif';
  changeSpans();
  addClass();
  appendImage();
});
