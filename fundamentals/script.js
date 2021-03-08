const colorInput = document.querySelector('.color-selector');
const widthInput = document.querySelector('.width-slider');
const heightInput = document.querySelector('.height-slider');
const colorBlock = document.querySelector('.color-block');
const blockControlsWrapper = document.querySelector('.block-controls-wrapper');

const TEST_DATA = {
  ARRAY_OF_INTS: [1, 5, 6, 7]
}

var student = {
  NAME : "David Rayy",
  SCLAS : "VI",
  ROLLNO : 12
};

/**
 * TASK 1
 *
 */
function getBiggerNumber(int1, int2) {
  if ((int1 >= 40 && int1 <= 60) && (int2 >= 40 && int2 <= 60)) {
    return int1 > int2 ? int1 : int2;
  }

  return 0;
}

/**
 * TASK 2
 *
 */
function getArraySum(intArr) {
  return intArr.reduce(function (accumulator, currentValue) {
    return accumulator += currentValue;
  }, 0);
}

/**
 * TASK 3
 *
 */
function colorMixer() {
  myColor = ["Red", "Green", "White", "Black"];
  let output = myColor.join(',');
}

/**
 * TASK 4
 *
 */
function listProperties() {
  for (let key in student) {
    if (student.hasOwnProperty(key)) {
      returnString += key + ',';
    }
  }
}

var stringToFormat = ' asd asd jjj bbb jjj '; // Global on purpous
/**
 * TASK 5
 *
 */
function stripLeadTrail() {
  stringToFormat.trim();
}

/**
 * TASK 6
 *
 */
function removeFirst() {
  stringToFormat.replace('jjj','');
}

/**
 * TASK 7
 *
 */
function removeFirst() {
  stringToFormat.search('jjj');
}

/**
 * TASK 8
 * '<p><strong><em>PHP Exercises</em></strong></p>' -- test string
 */
function strip_html_tags(string) {

  let regExHTML = /<[^>]*>/g;
  return string.replace(regExHTML, '');
}

/**
 * TASK 9
 * 'Hello world, welcome to the universe.' -- test string
 */
function removeFirst(inputString, end) {
  inputString.endsWith(end);
}

/**
 * TASK 10
 *
 */
function removeFirst(inputObject) {
  Object.keys(inputObject).length;
}

/**
 * TASK 11
 *
 */
function first(array, n) {
  if (n <= 0) {
    return array[0];
  }
  array.splice(n, array.length-1);
  return array;
}

/**
 * TASK 12
 *
 */
function removeFirst(inputObject) {
  var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];



  arr1.forEach(element => {
    if (itterObject.hasOwnProperty(element)) {
      itterObject[element] += 1;
    } else {
      itterObject[element] = 1;
    }
  });

  Object.keys(itterObject).forEach(key => {
    let currentValue = itterObject[key];

    if (currentValue > maxCount) {
      maxCount = currentValue;
      result = key + ': ' + currentValue;
    }
  });;
}

/**
 * TASK 13
 *
 */
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {

    let tmp = 0;
    if ((i % 3) == 0) {
      outputString += 'Fizz';
      tmp = 1;
    }
    if ((i % 5) == 0) {
      outputString += 'Buzz';
      tmp = 1;
    }
    if (tmp == 0) {
      outputString += i;
    }
    outputString += ' ';
  }
}

/**
 * TASK 14
 *
 */
function isOdd() {
  for (let i = 0; i <= 15; i++) {

    let outputString1 = '';

    (i%2) ? (outputString1 += i + ' is odd') : (outputString1 += i + ' is even');

    console.log(outputString1);
  }
}

/**
 * TASK 15
 *
 */
function happy_number(number, count = 0) {

  if(number < 0){return false;}
  let result = false;
  if(count < 10){
    let numbArray = number.toString().split('');
    let sum = 0;

    for(i=0; i<numbArray.length; i++) {
        sum+= numbArray[i] * numbArray[i];
    }

    if(sum == 1){
      return result = true;
    }else{
      count++;
      return happy_number(sum, count);
    }
  }
  return result;
}

/**
 * TASK 16
 *
 */
function return_angle(angle1, angle2) {
  let sum = angle1 + angle2;
  if(sum < 180){
    if((180 - sum) > 90 && (180 - sum) < 180){
      return 'obtuse';
    }
    if((180 - sum) < 90){
      return 'acute';
    }
    if((180 - sum) == 90){
      return 'right';
    }
  }
  return -1;
}

/**     Not from the tasks               */

function updateColor(e) {
  colorBlock.style.backgroundColor = e.target.value;
}

function updateWidth(e) {
  colorBlock.style.width = e.target.value + 'px';
}

function updateHeight(e) {
  colorBlock.style.height = e.target.value + 'px';
  blockControlsWrapper.style.marginTop = 200 - e.target.value + 'px';
}


colorInput.addEventListener('input', updateColor);
widthInput.addEventListener('input', updateWidth);
heightInput.addEventListener('input', updateHeight);

window.addEventListener('load', function () {

  getArraySum(TEST_DATA.ARRAY_OF_INTS);

  let counter = 0;
  let numberToTest = 0;
  while (counter < 5) {
    if(numberToTest >= 20){
      break;
    }
    if(happy_number(numberToTest) == true){
      console.log(numberToTest + ' - ' + true);
      counter++;
    }
    numberToTest++;
  }

  colorBlock.style.backgroundColor = colorInput.value;
  colorBlock.style.width = 200 + 'px';
  colorBlock.style.height = 200 + 'px';
});
