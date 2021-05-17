// 1)
// Create a function to calculate the sum of the two given integers. If the two values are the same, then returns the triple of their sum.
function sum(num1, num2) {
  let results = num1 + num2;
  if (num1 === num2) {
    return results * 3;
  } else {
    return results;
  }
}

// 2)
// Create a function to check two given numbers. Return true if one of the numbers is 50, or if their sum is 50.

function checkNumbers(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  }
}

// 3)
// Create a function to remove a character at the specified position of a given string and return the new string.
function removeCharacter(input, position) {
  input = input.split("").slice(position).join("");
  return input;
}
// 4)
//  Create a function to find the largest of three given integers.

function largest(num1, num2, num3) {
  let max;
  if (num1 > num2 && num1 > num3) {
    max = num1;
  } else if (num2 > num1 && num2 > num3) {
    max = num2;
  } else if (num3 > num1 && num3 > num2) {
    max = num3;
  }
  return max;
}

// 5)
// Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function range(num1, num2) {
  if (
    (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
    (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}

// 6)
// Create a function that creates and returns the specified number of copies of a given string (positive number).
function copies(input, number) {
  for (let i = 0; i < number; i++) {
    console.log(input);
  }
}

// 7)
// Create a function that returns the city name of a given string, if the string begins with "Los" or "New", otherwise returns blank.
function city(input) {
  if (
    input.length >= 3 &&
    (input.substring(0, 3) == "Los" || input.substring(0, 3) == "New")
  ) {
    return input;
  }

  return "";
}

// 8)
// Create a function to calculate the sum of three elements of a given array of integers of length 3.
function calcArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// console.log(calcArray([1,2,3]));
// 9)
// Create a function to test whether an array of integers of length 2 contains 1 or a 3.
function contains(arr) {
  if (arr.includes(1) || arr.includes(3)) {
    return true;
  } else {
    return false;
  }
}
// console.log(contains([4,1]));

// 10)
// Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
function notContains(arr) {
  if (arr.indexOf(1) == -1 && arr.indexOf(3) == -1) {
    return true;
  } else {
    return false;
  }
}

console.log(notContains([4, 7]));
// 11)
// Create a function to find the longest string from a given array of strings.
function longestString(stringArray) {
  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > stringArray[i + 1].length) {
      return stringArray[i];
    }
  }
}

// 12)
// Create a function to find the types of a given angle.
function typesOfAngle(angle) {
  if (angle < 90) {
    return "Acute angle.";
  }
  if (angle === 90) {
    return "Right angle.";
  }
  if (angle < 180) {
    return "Obtuse angle.";
  }
  if (angle === 180) {
    return "Straight angle.";
  }
}
console.log(typesOfAngle(90));
// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     Obtuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

// 13)
// Create a function to find the index of the greatest element of a given array of integers

// 14)
// Create a function to get the largest even number from an array of integers.

// 15)
// Create a function to check from two given integers, whether one is positive and another one is negative.

// 16)
// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.

// 17)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 18)
// Create a function to convert a number to a string, the content of which depends on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 19)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
