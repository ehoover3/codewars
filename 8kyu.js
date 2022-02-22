//////////////////////////////////////////////////////////////////////////////////

// 1. Multiply

// PROBLEM
// This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  return a * b;
}

// tests
console.log("-----Tests for Multiply-----");
console.log("--If code is correct, console log shows true--");
console.log(multiply(1, 1) === 1);
console.log(multiply(2, 1) === 2);
console.log(multiply(2, 2) === 4);
console.log(multiply(3, 5) === 15);
console.log(multiply(30, 10) === 300);

//////////////////////////////////////////////////////////////////////////////////

// 2. Even or Odd

// PROBLEM
// Create a function that takes an integer as an argument and
// returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// tests
console.log("-----Tests for Even or Odd-----");
console.log("--If code is correct, console log shows true--");
console.log(even_or_odd(2) === "Even");
console.log(even_or_odd(7) === "Odd");
console.log(even_or_odd(-42) === "Even");
console.log(even_or_odd(-7) === "Odd");
console.log(even_or_odd(0) === "Even");

//////////////////////////////////////////////////////////////////////////////////

// 3. Opposite Number

// PROBLEM
// Given an integer or a floating-point number, find its opposite value.

// EXAMPLES:
//   1  --->   -1
//  14  --->  -14
// -34  --->   34

function opposite(number) {
  return -number;
}

// tests
console.log("-----Tests for Opposite Number-----");
console.log("--If code is correct, console log shows true--");
console.log(opposite(1) === -1);
console.log(opposite(-3) === 3);
console.log(opposite(12) === -12);

//////////////////////////////////////////////////////////////////////////////////

// 4. Convert a Number to String

// PROBLEM
// We need a function that can transform a number into a string.

// EXAMPLES:
// 123  --->  "123"
// 999  --->  "999"

function numberToString(number) {
  return String(number);
}

// tests
console.log("-----Tests for Convert Number to String-----");
console.log("--If code is correct, console log shows true--");
console.log(numberToString(123) === "123");
console.log(numberToString(999) === "999");

//////////////////////////////////////////////////////////////////////////////////

// 5. Convert boolean values to strings 'Yes' or 'No'.

// PROBLEM
// Complete the method that takes a boolean value and returns a
// "Yes" string for true, or a "No" string for false.

function boolToString(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}

// tests
console.log("-----Tests for Boolean to String-----");
console.log("--If code is correct, console log shows true--");
console.log(boolToString(true) === "Yes");
console.log(boolToString(false) === "No");

//////////////////////////////////////////////////////////////////////////////////

// 6. Reversed Strings

// PROBLEM
// Complete the solution so that it reverses the string passed into it.

// EXAMPLES:
// 'book'  --->  'koob'
// 'run'   --->  'nur'
// 'yoga'  --->  'agoy'

function reverseString(str) {
  let myArray = str.split(""); // convert to array
  let reverseArray = myArray.reverse(); // reverse array
  let reverseString = reverseArray.join(""); // convert to string
  return reverseString;
}

// tests
console.log("-----Tests for Reversed Strings-----");
console.log("--If code is correct, console log shows true--");
console.log(reverseString("book") === "koob");
console.log(reverseString("run") === "nur");
console.log(reverseString("yoga") === "agoy");

//////////////////////////////////////////////////////////////////////////////////

// 7. String Repeat

// PROBLEM
// Write a function called repeatStr which repeats the given string string exactly n times.

// Example
// repeatStr(6, "I")      --->  "IIIIII"
// repeatStr(5, "Hello")  --->  "HelloHelloHelloHelloHello"

function repeatStr(number, string) {
  let answer = "";
  for (let i = 0; i < number; i++) {
    answer += string;
  }
  return answer;
}

// tests
console.log("-----Tests for String Repeat-----");
console.log("--If code is correct, console log shows true--");
console.log(repeatStr(3, "*") === "***");
console.log(repeatStr(5, "#") === "#####");
console.log(repeatStr(2, "go") === "gogo");

//////////////////////////////////////////////////////////////////////////////////

// 8. Sum of Positive

// PROBLEM
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [ 1, -4,  7,  12]   --->        1 +  7 + 12 = 20
// [ 5, 10, 15,  20]   --->   5 + 10 + 15 + 20 = 50
// [-2, -4, -7, -12]   --->                    =  0

function positiveSum(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += arr[i];
    }
  }
  return count;
}

// tests
console.log("-----Tests for Sum of Positive-----");
console.log("--If code is correct, console log shows true--");
console.log(positiveSum([1, -4, 7, 12]) === 20);
console.log(positiveSum([5, 10, 15, 20]) === 50);
console.log(positiveSum([-2, -4, -7, -12]) === 0);

//////////////////////////////////////////////////////////////////////////////////

// 9. Summation

// PROBLEM
// Write a program that finds the summation of every number from 1 to num.
// The number will always be a positive integer greater than 0.

// EXAMPLES
// summation(2)    --->               1 + 2 =  3
// summation(3)    --->           1 + 2 + 3 =  6
// summation(4)    --->       1 + 2 + 3 + 4 = 10

function summation(number) {
  let count = 0;
  for (let i = 0; i <= number; i++) {
    count += i;
  }
  return count;
}

// tests
console.log("-----Tests for Summation-----");
console.log("--If code is correct, console log shows true--");
console.log(summation(2) === 3);
console.log(summation(3) === 6);
console.log(summation(10) === 55);
console.log(summation(50) === 1275);

//////////////////////////////////////////////////////////////////////////////////

// 10. Remove First and Last Character

// PROBLEM
// Create a function that removes the first and last characters of a string.
// You don't have to worry with strings with less than two characters.

function removeChar(string) {
  let myArray = string.split("");
  let splicedArray = myArray.splice(1, string.length - 2);
  let splicedString = splicedArray.join("");
  return splicedString;
}

// tests
console.log("-----Tests for Remove First and Last Character-----");
console.log("--If code is correct, console log shows true--");
console.log(removeChar("eloquent") === "loquen");
console.log(removeChar("country") === "ountr");
console.log(removeChar("person") === "erso");
console.log(removeChar("place") === "lac");

//////////////////////////////////////////////////////////////////////////////////
