/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (n) {
  if (n <= 1) return [[1]];
  if (n <= 2) return [[1], [1, 1]];
  let res = new Array(n);
  res[0] = [1];
  res[1] = [1, 1];

  for (let i = 2; i < n; i++) {
    let row = new Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    let prev = res[i - 1];
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = prev[j - 1] + prev[j];
    }
    res[i] = row;
  }
  return res;
};
let res = [];

// {
//   for (let i = 0; i < numRows; i++) {
//     let row = Array(i + 1);
//     row[0] = 1;
//     row[row.length - 1] = 1;
//     for (let j = 1; j < row.length - 1; j++) {
//       let rowAbove = res[i - 1];
//       row[j] = rowAbove[j] + rowAbove[j - 1];
//     }
//     res[i] = row;
//   }
//   return res;
// }

console.log(generate(5), [
  [1],
  [1, 1],
  [1, 2, 1],
  [1, 3, 3, 1],
  [1, 4, 6, 4, 1],
]);
