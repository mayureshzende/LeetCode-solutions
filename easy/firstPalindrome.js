var firstPalindrome = function (words) {
  let output = "";
  for (let i = 0; i < words.length; i++) {
    if ([...words[i]].reverse().join("") === words[i]) {
      //   console.log(words[i]);
      output = words[i];
      break;
    }
  }
  return output;
};

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]), "ada");
console.log(firstPalindrome(["def", "ghi"]), "");
