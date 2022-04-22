var kWeakestRows = function (mat, k) {
  const getPower = (row) => {
    let res = 0;
    for (const ele of row) {
      if (ele == 0) return res;
      res++;
    }
    return res;
  };
  let resPower = {};
  mat.forEach((element, index) => {
    resPower[+index] = +getPower(element);
  });
  Object.keys(resPower).map((ele) => Number(ele));
  return Object.keys(resPower)
    .map((ele) => Number(ele))
    .sort((a, b) => +(resPower[a] - resPower[b]))
    .slice(0, k);
};

let Input = (mat = [
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1],
]);
let k = 3;
let Output = [2, 0, 3];
console.log(kWeakestRows(Input, k), Output);
