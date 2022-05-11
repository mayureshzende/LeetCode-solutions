var convertToTitle = function (columnNumber) {
  if (columnNumber <= 0) return "";
  let obj = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    0: "Z",
  };

  if (columnNumber < 27) return obj[columnNumber];

  let str = "";
  //   console.log(obj);
  while (columnNumber > 0) {
    let mod = columnNumber % 26;
    str = obj[mod] + str;
    columnNumber =
      mod === 0
        ? Math.floor(columnNumber / 26) - 1
        : Math.floor(columnNumber / 26);
  }
  return str;
};

console.log(convertToTitle(1), "A");
console.log(convertToTitle(79), "CA");
// console.log(convertToTitle(2), "B");
// console.log(convertToTitle(3), "C");
// console.log(convertToTitle(26), "Z");
console.log(convertToTitle(28), "AB");
console.log(convertToTitle(53), "CA");
console.log(convertToTitle(78), "CZ");
console.log(convertToTitle(705), "AAC");

/* 
var convertToTitle = function(n) {
    let newStr = "";
    while(n > 0){
        n--;
        let charCode = String.fromCharCode((n % 26) + 65);
        newStr = charCode + newStr;
        n = Math.floor(n/ 26); 
    }
    
    return newStr;
};
*/
