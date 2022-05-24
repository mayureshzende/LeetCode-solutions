var generate = function (numRows) {
  let res = [];

  for (let i = 0; i < numRows; i++) {
    let row = Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    for (let j = 1; j < row.length - 1; j++) {
      let rowAbove = res[i - 1];
      row[j] = rowAbove[j] + rowAbove[j - 1];
    }
    res[i] = row;
  }
  return res;
};

console.log(generate(5), [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
]);

/* 

var generate = function (numRows) {
  let result = [[1]];
  for (let i = 1; i < numRows; i++) {
    let newArr = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        newArr[j] = 1;
      } else {
        newArr[j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
    result.push(newArr);
  }
  return result;
};
*/
