//***********ans problem 1**************** */
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

// *******************Ans Problem 2******************
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
//**************Ans problem 3************** */
