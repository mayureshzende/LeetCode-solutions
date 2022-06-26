/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let cur = obj[s[i]];
    let next = obj[s[i + 1]];
    if (cur < next) {
      sum += next - cur;
      i++;
    } else {
      sum += cur;
    }
  }
  return sum;
};

console.log(romanToInt("III"), 3);
console.log(romanToInt("IV"), 4);
console.log(romanToInt("LVIII"), 58);
console.log(romanToInt("XII"), 12);
console.log(romanToInt("MCMXCIV"), 1994);
