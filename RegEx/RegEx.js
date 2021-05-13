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
