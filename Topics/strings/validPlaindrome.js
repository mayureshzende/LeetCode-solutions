var isPalindrome = function (s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let l = 0;
  let r = s.length - 1;
  while (l <= r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};

let s = "A man, a plan, a canal: Panama";
let output = "amanaplanacanalpanama";

console.log(isPalindrome(s));

console.log(isPalindrome("race a car"), false);
console.log(isPalindrome("0P"), false);
