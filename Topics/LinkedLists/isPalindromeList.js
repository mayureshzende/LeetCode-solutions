/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = (head) => {
  //   let dummy = new ListNode(0);
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverse(slow);
  fast = head;
  while (slow) {
    if (slow.val !== fast.val) {
      return false;
    }
    slow = slow.next;
    fast = fast.next;
  }
  return true;
};

function reverse(mid) {
  let next = null,
    prev = null;
  while (mid) {
    next = mid.next;
    mid.next = prev;
    prev = mid;
    mid = next;
  }
  mid = prev;
  return mid;
}
