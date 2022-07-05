/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = (head) => {
  let fast = head;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};
var middleNode1 = function (head) {
  let length = 0;
  let slow = 0;
  while (slow) {
    length++;
    slow = slow.next;
  }
  let pointer = traverse(head, Math.floor(length / 2));

  console.log(head, Math.floor(length / 2));
  console.log(length);
  return pointer.next;
};

function traverse(head, pointer) {
  let cur = 0;

  while (cur < pointer) {
    cur++;
    head = head.next;
  }
  return head;
}
