var finalValueAfterOperations = function (operations) {
  let obj = {
    "++X": 1,
    "X++": 1,
    "X--": -1,
    "--X": -1,
  };
  let x = 0;

  operations.map((op) => {
    x += obj[op];
  });
  //   console.log(x);
  return x;
};

console.log(finalValueAfterOperations(["++X", "++X", "X++"]), 3);
console.log(finalValueAfterOperations(["--X", "X++", "X++"]), 1);
console.log(finalValueAfterOperations(["X++", "++X", "--X", "X--"]), 0);
