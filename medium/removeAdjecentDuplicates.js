var removeDuplicates = function (s, k) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let peek = stack[stack.length - 1];

    if (stack.length === 0 || peek[0] !== current) {
      stack.push([current, 1]);
    } else {
      peek[1]++;
      if (peek[1] === k) {
        stack.pop();
      }
    }
  }

  let result = "";
  for (const [char, count] of stack) {
    // console.log(char, count);
    result += char.repeat(count);
  }
  return result;
};

console.log(removeDuplicates("abcd", 2), "abcd");
console.log(removeDuplicates("deeedbbcccbdaa", 3), "aa");
console.log(removeDuplicates("pbbcggttciiippooaais", 2), "ps");

// d eee d bb ccc b d aa;
/* 
[ [a ,2 ]  ]

*/
