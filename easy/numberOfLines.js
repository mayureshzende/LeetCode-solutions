var numberOfLines = function (widths, s) {
  if (s.length === 0) return [0, 0];
  let width = 0,
    lines = 1;
  for (let ch of s) {
    let word = widths[ch.charCodeAt() - 97];
    width += word;
    if (width > 100) {
      lines++;
      width = word;
    }
  }
  return [lines, width];
};

console.log(
  numberOfLines(
    [
      10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10, 10,
    ],
    "abcdefghijklmnopqrstuvwxyz"
  ),
  [3, 60]
);
console.log(
  numberOfLines(
    [
      4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      10, 10, 10, 10, 10, 10, 10,
    ],
    "bbbcccdddaaa"
  ),
  [2, 4]
);
