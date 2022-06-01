var reverseList = function (head) {
  let next = null,
    prev = null;
  while (head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  head = prev;
  return prev;
};

// [1, 2, 3, 4, 5];
