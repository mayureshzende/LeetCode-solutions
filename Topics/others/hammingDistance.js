var hammingDistance = function (x, y) {
  let strX = x.toString(2);
  let strY = y.toString(2);
  let result;
  if (strX.length <= strY.length) {
    result = check(strY, strX);
  } else {
    result = check(strX, strY);
  }
  return result;
};

function check(bg, sm) {
  let add0 = "";

  let diff = bg.length - sm.length;
  let res = 0;
  for (let i = 0; i < diff; i++) {
    add0 += "0";
  }
  add0 += sm;

  for (let i = 0; i < bg.length; i++) {
    bg.charAt(i) !== add0.charAt(i) ? res++ : null;
  }
  return res;
}

console.log(hammingDistance(1, 4), 2);
console.log(hammingDistance(3, 1), 1);
