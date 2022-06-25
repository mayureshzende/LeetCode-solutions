/**
 * @param {number} n
 * @return {number}
 */

const countPrimes = (n) => {
  let count = 0;
  let boo = new Array(n);

  for (let i = 2; i < n; i++) {
    if (boo[i]) continue;
    count++;
    for (let j = i * i; j < n; j += i) {
      boo[j] = 1;
      console.log(j);
    }
  }
  return count;
};
// var countPrimes1 = function (n) {
//   let count = 0;
//   for (let i = 1; i < n; i++) {
//     if (isPrime(i)) {
//       console.log(i);
//       count++;
//     }
//   }
//   return count;
// };

// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = 2; i <= Math.floor(num / 2); i++) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }
console.log(countPrimes(10));
