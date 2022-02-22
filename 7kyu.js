//////////////////////////////////////////////////////////////////////////////////

// 1. Vowel Count

// PROBLEM
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getVowelCount(str) {
  let vowelsCount = 0;
  let arr = str.split("");
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i of arr) {
    if (vowels.includes(i)) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

// tests
console.log("-----Tests for Vowel Count-----");
console.log("--If code is correct, console log shows true--");
console.log(getVowelCount("abracadabra") === 5);
console.log(getVowelCount("apple") === 2);
console.log(getVowelCount("moonlight") === 3);

//////////////////////////////////////////////////////////////////////////////////

// 2. Disemvowel Trolls

// PROBLEM
// Trolls are attacking your comment section!
// Remove all of the vowels from the trolls' comments, neutralizing the threat.
// Write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function disemvowel(string) {
  let vowels = "aeiou";

  return string
    .split("")
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join("");
}

// tests
console.log("-----Tests for Disemvowel Trolls-----");
console.log("--If code is correct, console log shows true--");
console.log(disemvowel("What is this?  A house for ants?") === "Wht s ths?   hs fr nts?");
console.log(disemvowel("Your mother was a hamster") === "Yr mthr ws  hmstr");
console.log(disemvowel("and your father smelt of elderberries!") === "nd yr fthr smlt f ldrbrrs!");

//////////////////////////////////////////////////////////////////////////////////

// 3. Square Every Digit

// PROBLEM
// Square every digit of a number and concatenate them.
// Note: The function accepts an integer and returns an integer

// EXAMPLE
// squareDigits(9119)  --->  811181, because 92 is 81 and 12 is 1.

function squareDigits(num) {
  let myArray = String(num).split("");
  let newArray = myArray.map((i) => i * i);
  let string = newArray.join("");
  let number = Number(string);

  return number;
}

// tests
console.log("-----Tests for Square Every Digit-----");
console.log("--If code is correct, console log shows true--");
console.log(squareDigits(3212) === 9414);
console.log(squareDigits(2112) === 4114);
console.log(squareDigits(0) === 0);

//////////////////////////////////////////////////////////////////////////////////

// 4. Highest and Lowest

// PROBLEM
// Square every digit of a number and concatenate them.
// Note: The function accepts an integer and returns an integer

// EXAMPLE
// squareDigits(9119)  --->  811181, because 92 is 81 and 12 is 1.

function highAndLow(numbers) {
  let numArray = numbers.split(" ");
  let max = Number(numArray[0]);
  let min = Number(numArray[0]);

  for (let i = 1; i < numArray.length; i++) {
    let num = Number(numArray[i]);
    if (num > max) max = num;
    if (num < min) min = num;
  }
  return `${max} ${min}`;
}

// tests
console.log("-----Tests for Highest and Lowest-----");
console.log("--If code is correct, console log shows true--");
console.log(highAndLow("5 2 -2 -300 80 4 56") === "80 -300");

//////////////////////////////////////////////////////////////////////////////////

// 5. Get the Middle Character

// Given a word, return the middle character of the word.
// If the word's length is odd, return the middle character.
// If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
  let middle = s.length / 2;
  return s.length % 2 ? s.charAt(Math.floor(middle)) : s.slice(middle - 1, middle + 1);
}

// tests
console.log("-----Tests for Get the Middle Character-----");
console.log("--If code is correct, console log shows true--");
console.log(getMiddle("test") === "es");
console.log(getMiddle("testing") === "t");
console.log(getMiddle("middle") === "dd");
console.log(getMiddle("A") === "A");

//////////////////////////////////////////////////////////////////////////////////

// 6. You're a Square!

// Given an integral number, determine if it's a square number:
// In math, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// EXAMPLES
// -1  --->  false
//  0  --->  true   (0*0 is 0.)
//  3  --->  false
//  4  --->  true   (the square root of  4 is 2.  2*2 is 4.)
// 25  --->  true   (the square root of 25 is 5.  5*5 is 5.)
// 26  --->  false

// note:  The tests will always use an integral number

function isSquare(number) {
  let sqrt = Math.sqrt(number);

  if (Number.isInteger(sqrt) === true) return true;
  else return false;
}

// tests
console.log("-----Tests for You're a Square-----");
console.log("--If code is correct, console log shows true--");
console.log(isSquare(-1) === false);
console.log(isSquare(0) === true);
console.log(isSquare(3) === false);
console.log(isSquare(4) === true);
console.log(isSquare(25) === true);
console.log(isSquare(26) === false);

//////////////////////////////////////////////////////////////////////////////////

// 7. Descending Order

// Make a function that can take any non-negative integer as an argument and
// return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.

// EXAMPLES:
// Input:     42145  --->  Output: 54421
// Input:    145263  --->  Output: 654321
// Input: 123456789  --->  Output: 987654321

function descendingOrder(n) {
  let myArray = String(n).split("");
  myArray = myArray.sort().reverse().join("");
  let number = Number(myArray);
  return number;
}

// tests
console.log("-----Tests for Descending Order-----");
console.log("--If code is correct, console log shows true--");
console.log(descendingOrder(0) === 0);
console.log(descendingOrder(1) === 1);
console.log(descendingOrder(111) === 111);
console.log(descendingOrder(15) === 51);
console.log(descendingOrder(1021) === 2110);
console.log(descendingOrder(123456789) === 987654321);

//////////////////////////////////////////////////////////////////////////////////

// 8. Mumbling

// The examples below show you how to write function accum:

// EXAMPLES
// accum("abcd")    --->  "A-Bb-Ccc-Dddd"
// accum("RqaEzty") --->  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt")    --->  "C-Ww-Aaa-Tttt"

function accum(s) {
  let newArray = s.split("");
  let updatedArray = newArray.map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i));
  let answerString = updatedArray.join("-");
  return answerString;
}

// tests
console.log("-----Tests for Mumbling-----");
console.log("--If code is correct, console log shows true--");
console.log(
  accum("ZpglnRxqenU") ===
    "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
);
console.log(
  accum("NyffsGeyylB") ===
    "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb"
);
console.log(
  accum("MjtkuBovqrU") ===
    "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu"
);

//////////////////////////////////////////////////////////////////////////////////

// 9. Shortest Word

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(string) {
  let myArray = string.split(" ");
  let shortest = myArray[0];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i].length < shortest.length) {
      shortest = myArray[i];
    }
  }
  return shortest.length;
}

// tests
console.log("-----Tests for Shortest Word-----");
console.log("--If code is correct, console log shows true--");
console.log(findShort("bitcoin take over the world maybe who knows perhaps") === 3);
console.log(findShort("turns out random test cases are easier than writing out basic ones") === 3);
console.log(findShort("Let's travel abroad shall we") === 2);

//////////////////////////////////////////////////////////////////////////////////

// 10. Maskify

// When you buy something, you're asked for your credit card number
// However, since someone could look over your shoulder,
// you don't want that shown on your screen. Instead, we mask it.

// Write a function maskify, which changes all but the last four characters into '#'.

// EXAMPLES
// maskify("4556364607935616")  --->  "############5616"
// maskify(     "64607935616")  --->       "#######5616"
// maskify(               "1")  --->                 "1"
// maskify(                "")  --->                  ""
// maskify("Skippy")            --->            "##ippy"
// maskify("I'm Batman!")       --->       "#######man!"

function maskify(cc) {
  cc = cc.split("");
  for (let i = 0; i < cc.length - 4; i++) {
    cc[i] = "#";
  }

  cc = cc.join("");
  return cc;
}

// tests
console.log("-----Tests for Maskify-----");
console.log("--If code is correct, console log shows true--");
console.log(maskify("4556364607935616") === "############5616");
console.log(maskify("1") === "1");
console.log(maskify("11111") === "#1111");
