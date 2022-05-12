var isPalindrome = function (s) {
  let str = s.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
  console.log(str);
  for (let i = 0, len = str.length; i < len; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true; // str.reverse() === str;
};
console.log(isPalindrome("A man, a plan, a canal: Panama"), true);
console.log(isPalindrome("race a car"), false);
console.log(isPalindrome(" "), true);
console.log(isPalindrome("0P"), false);
