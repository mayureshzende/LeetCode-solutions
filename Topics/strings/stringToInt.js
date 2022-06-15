var myAtoi = function (s) {
  let i = 0;
  let positive = true;
  const length = s.length;
  const intMax = 2 ** 31 - 1;
  const intMin = -(2 ** 31);

  while (i < length && s.charAt(i) === " ") {
    i++;
  }
  //   console.log(i, length);
  if (i === length) {
    return 0;
  }

  if (s.charAt(i) === "+") {
    i++;
  } else if (s.charAt(i) === "-") {
    positive = false;
    i++;
  }

  let num = 0;
  for (; i < length && s.charAt(i) >= "0" && s.charAt(i) <= "9"; i++) {
    num = num * 10 + (s[i] - 0);
  }
  num = positive ? num : -num;

  if (num < intMin) {
    return intMin;
  } else if (num > intMax) {
    return intMax;
  }

  return num;
};

console.log(myAtoi("42"), 42);
console.log(myAtoi("  -42"), -42);
console.log(myAtoi("0031"), 31);
console.log(myAtoi("4193 with words"), 4193);
