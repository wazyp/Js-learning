const button = document.querySelector('.calculate');
const radiusInput = document.querySelector('.radius');
const volumeOutp = document.querySelector('.volume');

button.addEventListener('click', function onClick() {
    volumeOutp.value = (radiusInput.value * radiusInput.value) * 3.14;
});
