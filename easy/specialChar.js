function solve(s) {
  const ht = {};
  const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= 0 || s[i] <= 9) {
      ht["numbers"] = (ht["numbers"] || 0) + 1;
    } else if (format.test(s[i])) {
      ht["spc"] = (ht["spc"] || 0) + 1;
    } else if (s[i].toUpperCase() === s[i]) {
      //   console.log("upercase ", s[i]);
      ht["UpperCase"] = (ht["UpperCase"] || 0) + 1;
    } else if (s[i].toLowerCase() === s[i]) {
      //   console.log("lowercase ", s[i]);
      ht["LowerCase"] = (ht["LowerCase"] || 0) + 1;
    } else {
      //   ht["spc"] = (ht["spc"] || 0) + 1;
    }
  }

  //   console.log(ht);
  return [ht["UpperCase"], ht["LowerCase"], ht["numbers"], ht["spc"]];
}

console.log(solve("Codewars@codewars1234.com"), [1, 18, 4, 2]);
console.log(solve("bgA5<1d-tOwUZTS8yQ"), [7, 6, 3, 2]);
