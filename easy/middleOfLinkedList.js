var middleNode = function (head) {
  let length = 1;
  let currentNode = head.next;

  while (currentNode) {
    length++;
    currentNode = currentNode.next;
  }
  if (length === 1) return head;

  // console.log(length);
  let mid = Math.floor(length / 2);
  // console.log(mid)
  let leader = travelToIndex(head, mid - 1);
  // console.log(leader)
  return leader;
};

function travelToIndex(head, index) {
  let currentNode = head.next;
  let count = 0;
  while (count < index) {
    currentNode = currentNode.next;
    count++;
  }
  return currentNode;
}
