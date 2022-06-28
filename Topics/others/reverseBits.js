/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  const rev = n.toString(2).split("").reverse();
  while (rev.length < 32) rev.push("0");
  return parseInt(rev.join(""), 2);
};
