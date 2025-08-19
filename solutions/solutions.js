//*********** String Reverse problem 1**************** */
function reverse(normal) {
  const string = normal;
  let arryString = [];
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    arryString.push(element);
  }
  let arryReverse = arryString.reverse();
  const reverseString = arryReverse.join("");

  return reverseString;
}
const reverseString = reverse("kalam");
// console.log(reverseString)

// ******************* Finding vowel Problem 2******************
function CountVowel(string) {
  const stringValue = string;
  let vowelFinding = [];
  const vowel = ["a", "e", "i", "o", "u"];
  for (let index = 0; index < stringValue.length; index++) {
    const element = string[index];
    if (vowel.includes(element.toLowerCase())) {
      vowelFinding.push(element.toUpperCase());
    }
  }
  return vowelFinding.length;
}
const count = CountVowel("kalaEm");
console.log(count);

// ************** Problem 3: Check for Palindrome **************

function Palindrome(string) {
  const stringValue = string.toLowerCase();
  let arryStringValue = stringValue.split("");

  let arryReverseValue = arryStringValue.reverse();

  const reverseString = arryReverseValue.join("");

  return stringValue.toLowerCase() === reverseString.toLowerCase();
}
console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello"));  // false

// ************** Problem 4: Find the Maximum Number **************
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([5, 1, 9, 3])); // 9

// ************** Problem 5: Remove Duplicates from an Array **************
function removeDuplicates(arr) {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]

// ************** Problem 6: Sum of All Numbers in an Array **************
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10

// ************** Problem 7: Find Even Numbers in an Array **************
function findEvenNumbers(arr) {
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }
  return evens;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

// ************** Problem 8: Capitalize First Letter of Each Word **************
function capitalizeWords(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(capitalizeWords("hello world")); // "Hello World"

// ************** Problem 9: Find the Factorial of a Number **************
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5)); // 120

// ************** Problem 10: PingPong Challenge **************
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();
