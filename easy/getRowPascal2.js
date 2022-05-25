var getRow = function (rowIndex) {
  let psTriangle = [];

  for (let i = 0; i <= rowIndex; i++) {
    let row = Array(i + 1);
    row[0] = 1;
    row[row.length - 1] = 1;
    for (let j = 1; j < row.length - 1; j++) {
      let rowabove = psTriangle[i - 1];
      row[j] = rowabove[j - 1] + rowabove[j];
    }
    psTriangle[i] = row;
  }
  return psTriangle[rowIndex];
};
console.log(getRow(3), [1, 3, 3, 1]);
// let res = [];
// for (let i = 0; i < numRows; i++) {
//   let row = Array(i + 1);
//   row[0] = 1;
//   row[row.length - 1] = 1;
//   for (let j = 1; j < row.length - 1; j++) {
//     let rowAbove = res[i - 1];
//     row[j] = rowAbove[j] + rowAbove[j - 1];
//   }
//   res[i] = row;
// }
// return;
