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
 * @return {number}
 */
var maxDepth = function (root) {
  let traverse = (node, sum) => {
    if (node === null) {
      return sum;
    }

    return Math.max(
      traverse(node.left, sum + 1),
      traverse(node.right, sum + 1)
    );
  };

  return traverse(root, 0);
};
