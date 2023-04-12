function rot13(str) {
  let decodedStr = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    if (charCode < 64) {
      decodedStr += str[i];
    } else if (charCode >= 65 && charCode <= 90) {
      decodedStr += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    }
  }
  return decodedStr;
}

console.log(rot13("SERR CVMMN!"));
