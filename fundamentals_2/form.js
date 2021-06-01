const button = document.querySelector('.submit-button');
const linkElement = document.getElementById('w3r');

button.addEventListener('click', function onClick() {
    Array.from(linkElement.attributes).forEach(function(attr) {
        console.log(attr.nodeName + '=' + attr.nodeValue);
    });
});