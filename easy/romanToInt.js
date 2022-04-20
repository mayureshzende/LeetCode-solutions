let obj = {
  I: 1,
  V: 5,
  X: 10,
  M: 1000,
  L: 50,
  C: 100,
  D: 500,
};
var romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] < obj[s[i + 1]]) {
      sum += obj[s[i + 1]] - obj[s[i]];
      i++;
    } else {
      sum += obj[s[i]];
    }
  }
  return sum;
};
// M = 1000, CM = 900, XC = 90 and IV = 4.
console.log(romanToInt("MCMXCIV"), 1994);
console.log(romanToInt("III"), 3);
console.log(romanToInt("LVIII"), 58);
console.log(romanToInt("XXVII"), 27);
