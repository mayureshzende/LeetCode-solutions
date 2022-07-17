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
var postorderTraversal = function (root) {
  if (!root) return [];
  return traverse(root, []);
};

function traverse(root, res) {
  if (root.left) {
    traverse(root.left, res);
  }
  if (root.right) {
    traverse(root.right, res);
  }
  res.push(root.val);
  return res;
}
