var rotate = function (matrix) {
  const N = matrix.length;
  //making transpose
  for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
    // console.log(matrix);
  }
  // fliping the last and first column
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < Math.floor(N / 2); j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][N - 1 - j];
      matrix[i][N - 1 - j] = temp;
    }
  }
  return matrix;
};
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let Output = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
];

console.log(rotate(arr), Output);
