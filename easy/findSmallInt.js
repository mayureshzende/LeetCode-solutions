function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const set = new Set();

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0) {
      set.add(A[i]);
    }
  }
  for (let i = 1; i <= A.length + 1; i++) {
    if (!set.has(i)) {
      return i;
    }
  }

  return 1;
}

console.log(solution([1, 3, 6, 4, 1, 2]), 5);
console.log(solution([1, 2, 3]), 4);
