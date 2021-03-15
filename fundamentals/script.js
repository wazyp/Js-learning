const TEST_DATA = {
  ARRAY_OF_INTS: [1, 5, 6, 7]
}

var student = {
  NAME : 'David Rayy',
  SCLAS : 'VI',
  ROLLNO : 12
};

var stringToFormat = ' asd asd jjj bbb jjj '; // Global on purpose

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
  const myColorsArray = ['Red', 'Green', 'White', 'Black'];
  const output = myColorsArray.join(',');

  return output;
}

/**
 * TASK 4
 *
 */
function listProperties() {
  let returnString = '';

  for (let key in student) {
    if (student.hasOwnProperty(key)) {
      returnString += key + ',';
    }
  }

  return returnString;
}


/**
 * TASK 5
 *
 */
function stripLeadTrail() {
  return stringToFormat.trim();
}

/**
 * TASK 6
 *
 */
function removeFirst() {
  return stringToFormat.replace('jjj','');
}

/**
 * TASK 7
 *
 */
function findFirst() {
  return stringToFormat.search('jjj');
}

/**
 * TASK 8
 * '<p><strong><em>PHP Exercises</em></strong></p>' -- test string
 */
function strip_html_tags(string) {
  const regExHTML = /<[^>]*>/g;

  return string.replace(regExHTML, '');
}

/**
 * TASK 9
 * 'Hello world, welcome to the universe.' -- test string
 */
function checkIfEnds(inputString, end) {
  return inputString.endsWith(end);
}

/**
 * TASK 10
 *
 */
function objectLenght(inputObject) {
  return Object.keys(inputObject).length;
}

/**
 * TASK 11
 *
 */
function firstnElements(array, n) {
  if (array == NULL) {
    return;
  }

  if (n <= 0) {
    return array[0];
  } else {
    return array.splice(n, array.length-1);
  }
}

/**
 * TASK 12
 *
 */
function findMostCommon() {
  const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  let itterObject = {};
  let result = '';
  let maxCount = 0;

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
  });

  return result;
}

/**
 * TASK 13
 *
 */
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let outputString = '';

    if ((i % 15) == 0) {
      outputString += 'FizzBuzz';
    } else if ((i % 3) == 0) {
      outputString += 'Fizz';
    } else if ((i % 5) == 0) {
      outputString += 'Buzz';
    } else {
      outputString += i;
    }

    console.log(outputString);
  }
}

/**
 * TASK 14
 *
 */
function isOdd() {
  for (let i = 0; i <= 15; i++) {
    if (i % 2) {
      console.log(i + ' is odd');
    } else {
      console.log(i + ' is even');
    }
  }
}

/**
 * TASK 15
 *
 */
function happyNumber(number, count = 0) {
  let result = false;

  if (number < 0) {
    return false;
  }

  if (count < 10) {
    let numbArray = number.toString().split('');
    let sum = 0;

    for (i=0; i<numbArray.length; i++) {
        sum+= numbArray[i] * numbArray[i];
    }

    if (sum == 1) {
      return result = true;
    } else {
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
function returnAngle(angle1, angle2) {
  const sum = angle1 + angle2;

  if (sum < 180) {
    if ((180 - sum) > 90 && (180 - sum) < 180) {
      return 'obtuse';
    } else if ((180 - sum) < 90) {
      return 'acute';
    } else {
      return 'right';
    }
  }

  return -1;
}
