var romanToInt = function (str) {
  const romanCharacters = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];
  let numNormal = 0;
  let roman = str;
  console.log(roman.split("").pop());
  for (let i = roman.length - 1; i >= 0; i--) {
    for (let j = romanCharacters.length - 1; j >= 0; j--) {
      if (
        romanCharacters[j].symbol.length == 2 &&
        romanCharacters[j].symbol == roman.slice(i - 1, i + 1)
      ) {
        console.log(roman.slice(i - 1, i + 1));
        numNormal += romanCharacters[j].value;
        const remaining = roman.split("");
        remaining.splice(i - 1, 2);
        roman = remaining.join("");
      } else if (roman[i] == romanCharacters[j].symbol) {
        numNormal += romanCharacters[j].value;
        const remaining = roman.split("");
        remaining.pop();
        roman = remaining.join("");
      }
    }
  }
  return numNormal;
};

var longestCommonPrefix = function (strs) {
  let prefix = "";
  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    for (let j = 0; j < word.length; j++) {
      if (strs[i][0][0] == word[0]) {
        console.log(strs[i][0][0]);
      }
    }
  }
};
longestCommonPrefix(["flower", "flow", "flight"]);
