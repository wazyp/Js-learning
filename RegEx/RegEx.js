// Task 1
const button1 = document.querySelector('.btn-submit-1');
const input1 = document.querySelector('.input-1');
const regexLocale = /^[a-z]{2,4}(_[A-Z][a-z]{3})?(_([A-Z]{2}|[0-9]{3}))?$/igm;

//Language code: ISO 639 2 or 3, or 4 for future use, alpha.
//Optional script code: ISO 15924 4 alpha.
//Optional country code: ISO 3166-1 2 alpha or 3 digit.
//Separated by underscores.

button1.addEventListener('click', function() {
   if (regexLocale.test(input1.value)) {
        console.log('locale valid');
   } else {
        console.log('locale invalid');
   }
});

// Task 2
const button2 = document.querySelector('.btn-submit-2');
const input2 = document.querySelector('.input-2');
const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z \d@$!%*?&]{8,64}$/igm;

button2.addEventListener('click', function() {
    if (regexPassword.test(input2.value)) {
        console.log('password valid');
    } else {
        console.log('password invalid');
    }
});

// Task 3

const button3 = document.querySelector('.btn-submit-3');
const input3 = document.querySelector('.input-3');
const regexNumb = /^(([+]359)|[0])([\d]{6,9})/;

button3.addEventListener('click', function() {
    if (regexNumb.test(input3.value)) {
        console.log('number valid');
    } else {
        console.log('number invalid');
    }
});

// Task 4

const button4 = document.querySelector('.btn-submit-4');
const input4 = document.querySelector('.input-4');
const regexEmail = /^[\w\d_\.+]+@(.+\.)+.{2,}$/;

button4.addEventListener('click', function() {
    if (regexEmail.test(input4.value)) {
        console.log('Email valid');
    } else {
        console.log('Email invalid');
    }
});

// Task 5

const button5 = document.querySelector('.btn-submit-5');
const input5 = document.querySelector('.input-5');
const regexName = /[\S]+/g;

button5.addEventListener('click', function() {
    var matches = [];
    var match = regexName.exec(input5.value);

    while (match != null) {
        matches.push(match[0]);
        match = regexName.exec(input5.value);
    }

    if (matches.length < 2) {
        console.log('Name not correct');
        return;
    } else {
        console.log(matches[matches.length-1] + ', ' + matches[0]);
    }

});
