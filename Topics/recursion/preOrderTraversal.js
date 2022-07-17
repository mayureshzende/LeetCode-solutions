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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];
  res = traverse(root, res);
  return res;
};

function traverse(root, res) {
  res.push(root.val);
  if (root.left) {
    traverse(root.left, res);
  }
  if (root.right) {
    traverse(root.right, res);
  }
  return res;
}
