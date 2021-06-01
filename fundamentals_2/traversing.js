const contentElement = document.getElementById('content');

function makeChanges() {
    const lastNode = contentElement.lastElementChild;
    const firstNode = contentElement.firstElementChild;
    const newChild = document.createElement('p');
    const newChildTop = document.createElement('p');

    console.log(firstNode.firstChild.nodeValue);
    firstNode.firstChild.nodeValue = 'New title';
    lastNode.innerHTML = 'text 123123';

    console.log(lastNode.attributes);
    lastNode.attributes.hidden = true;

    newChildTop.innerText = 'Before text';
    newChild.innerText = 'New text';

    lastNode.appendChild(newChild);
    lastNode.insertBefore(newChildTop, newChild);

    lastNode.removeChild(newChildTop);
    lastNode.replaceChild(newChildTop, newChild);
}

window.onload = makeChanges;