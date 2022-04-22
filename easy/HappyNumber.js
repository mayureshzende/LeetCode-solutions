var isHappy = function (n) {
  if (n == 1 || n == 7) return true;
  var sum = n,
    x = n;

  while (sum > 9) {
    sum = 0;

    while (x > 0) {
      let rem = x % 10;
      sum += rem * rem;
      x = Math.floor(x / 10);
    }
    if (sum === 1) return true;
    x = sum;
  }
  if (sum == 7) return true;
  return false;
};

console.log(isHappy(19), true);
console.log(isHappy(2), false);
/* 
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

Input: n = 2
Output: false

solution 

hashing 

var isHappy = function(n) {
    const visited = Object.create(null)

    let number = n

    while (!visited[number] && number !== 1) {
        visited[number] = true

        let digits = []

        while (number > 0) {
            digits.push(number % 10)
            number = Math.floor(number / 10)
        }
        
        while (digits.length > 0) {
            number += digits.pop() ** 2
        }
    }

    return number === 1
}
*/
