function palindrome(str) {
  //reverse the key parameter str
  str = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  // Check if the string is equal to its reverse
  return str === str.split("").reverse().join("");
}

console.log(palindrome("race car"));
