var isPalindrome = function (x) {
  if (x < 0) return false;
  let org = x;
  let revnum = 0;
  while (x) {
    revnum = revnum * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return revnum === org ? true : false;
  //   let num = x.toString();
  //   return Number([...num].reverse().join("")) === x;
};

console.log(isPalindrome(121), true);
