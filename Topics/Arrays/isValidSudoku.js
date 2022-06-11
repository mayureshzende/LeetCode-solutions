const isValidSudoku = (board) => {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cell = board[i][j];
      if (cell === ".") continue;
      let boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      console.log(boxNum);
      let row = `row: ${i}, value: ${cell}`;
      let column = `cloumn: ${j}, value: ${cell}`;
      let box = `box: ${boxNum}, value: ${cell}`;
      if (set.has(row) || set.has(column) || set.has(box)) return false;
      set.add(row);
      set.add(column);
      set.add(box);
    }
    console.log(" === ");
  }
  return true;
};

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];
console.log(isValidSudoku(board), true);
