var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(-1);

  let fast = dummy;
  let slow = dummy;

  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummy.next;
};
// 1 2 3 4 -2nd index
