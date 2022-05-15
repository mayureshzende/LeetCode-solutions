var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let sum = 0;
  let list = new ListNode();
  let head = list;

  while (l1 || l2 || carry) {
    let v1 = 0;
    let v2 = 0;
    if (l1) {
      v1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      v2 = l2.val;
      l2 = l2.next;
    }
    sum = v1 + v2 + carry;
    carry = Math.floor(sum / 10);
    let digit = sum % 10;
    let currentNode = new ListNode(digit);
    list.next = currentNode;
    list = currentNode;
  }
  return head.next;
};

// (l1 = [2, 4, 3]), (l2 = [5, 6, 4]);
// Output: [7, 0, 8];
