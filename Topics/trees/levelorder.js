/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];
  if (!root) {
    return res;
  }

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let row = [];
    let rowsize = queue.length;

    while (rowsize > 0) {
      let currNode = queue.shift();
      if (currNode.left) {
        queue.push(currNode.left);
      }
      if (currNode.right) {
        queue.push(currNode.right);
      }
      row.push(currNode.val);
      rowsize--;
    }
    res.push(row);
  }
  return res;
};
