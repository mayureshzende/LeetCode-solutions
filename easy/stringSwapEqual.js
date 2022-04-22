var areAlmostEqual = function (s1, s2) {
  if (s1 === s2) return true;
  const chararr = new Array(26).fill(0);
  let swap = 0;

  for (let i = 0; i < s1.length; i++) {
    let temp = s1[i].charCodeAt() - "a".charCodeAt();
    chararr[temp]++;
  }
  for (let i = 0; i < s2.length; i++) {
    let temp = s2[i].charCodeAt() - "a".charCodeAt();

    if (chararr[temp] === 0) {
      return false;
    } else {
      chararr[temp]--;
    }
    if (s1[i] !== s2[i]) {
      swap++;
    }
    if (swap > 2) return false;
  }
  return true;
};

console.log(areAlmostEqual("bank", "kanb"), true);
// console.log(
//   areAlmostEqual(
//     "siyolsdcjthwsiplccjbuceoxmpjgrauocx",
//     "siyolsdcjthwsiplccpbuceoxmjjgrauocx"
//   ),
//   true
// );
