var reverseString = function (s) {
  let l = 0,
    r = s.length - 1;
  while (l < r) {
    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
  }
  //   for (let i = 0, j = s.length - 1; i < j; i++, j--) {
  //     let temp = s[i];
  //     s[i] = s[j];
  //     s[j] = temp;
  //   }
  return s;
};

console.log(reverseString(["h", "e", "l", "l", "o"]), [
  "o",
  "l",
  "l",
  "e",
  "h",
]);
