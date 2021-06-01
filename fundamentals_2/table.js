const button = document.querySelector('.rows-button');
const tableElement = document.getElementById('sampleTable');

button.addEventListener('click', function onClick() {
    var row = tableElement.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerText = 'new cell 1';
    cell2.innerText = 'new cell 2';
});