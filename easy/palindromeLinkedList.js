var isPalindrome = function (head) {
  let res = [];
  while (head) {
    res.push(head.val);
    head = head.next;
  }
  let left = 0;
  let right = res.length - 1;
  while (left <= right) {
    if (res[right] !== res[left]) {
      return false;
    }
    right++;
    left--;
  }
  return true;
};

console.log(isPalindrome([1, 2, 2, 1]), true);
console.log(isPalindrome([1, 2]), false);
