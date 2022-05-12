var titleToNumber = function (columnTitle) {
  let res = 0;

  for (let i = 0; i < columnTitle.length; i++) {
    let d = columnTitle[i].charCodeAt(0) + 1 - 65;
    res = res * 26 + d;
  }
  return res;
};

console.log(titleToNumber("A"), 1);
console.log(titleToNumber("Z"), 26);
console.log(titleToNumber("AA"), 27);
console.log(titleToNumber("AZ"), 52);
console.log(titleToNumber("ZY"), 701);
//  A - 26^0 * 1 = 1
//z - 26^0 * 26 = 26
// AA - 26^1*1 + 26^0*1 = 26 + 1 = 27
