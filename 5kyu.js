//////////////////////////////////////////////////////////////////////////////////

// 5 kyu:  Pig Latin

// PROBLEM
// Move the first letter of each word to the end of it,
// then add "ay" to the end of the word.

// For Example
// pigIt('Pig latin is cool')  // igPay atinlay siay oolcay
// pigIt('Hello world')        // elloHay orldway

// function pigIt(str) {
//   let arrayWord = str.split(" ");
//   return arrayWord
//     .map(function (word) {
//       var firstLetter = word.charAt(0);
//       if (word === "!") return ["!"];
//       if (word === "?") return ["?"];
//       if (word === ".") return ["."];
//       return word.slice(1) + firstLetter + "ay";
//     })
//     .join(" ");
// }

// tests
// console.log("-----Tests for Merged String Checker-----");
// console.log("--If code is correct, console log shows true--");
// console.log(pigIt("Pig latin is cool" === "igPay atinlay siay oolcay"));
// console.log(pigIt("This is my string" === "hisTay siay ymay tringsay"));

//////////////////////////////////////////////////////////////////////////////////

// 5 kyu:  Merged String Checker

// PROBLEM
// Check if the word, can be formed from two other strings, letters1 and letters2.

// For example:
// 'storybook' can be made from 'ysotr' and 'ookb'

// SOLUTION
function isMerge(combinedWord, word1, word2) {
  if (combinedWord.length !== word1.length + word2.length) return false;

  let strS = combinedWord.split("").sort().join("");
  let strPart = word1.concat(word2).split("").sort().join("");

  if (strS === strPart) return true;
  else return false;
}

// NOTES
// .length                 counts number of elements in array
// .split('')              converts string to array
// .sort()                 sorts array alphabetically
// .join('')               converts array to a string
//  array1.concat(array2)  combines 2 arrays together

// tests
console.log("-----Tests for Merged String Checker-----");
console.log("--If code is correct, console log shows true--");
console.log(isMerge("storybook", "ysotr", "ookb") === true);
console.log(isMerge("mailbox", "alim", "oxb") === true);
console.log(isMerge("raincoat", "nrai", "otac") === true);
console.log(isMerge("playset", "pla", "set") === false);
console.log(isMerge("monopoly", "mono", "ply") === false);

//////////////////////////////////////////////////////////////////////////////////
