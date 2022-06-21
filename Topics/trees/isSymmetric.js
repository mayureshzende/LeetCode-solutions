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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;
  return helper(root.left, root.right);
};

function helper(l, r) {
  if ((!l && r) || (l && !r) || (l && r && l.val !== r.val)) return false;
  if (l && r) return helper(l.left, r.right) && helper(l.right, r.left);
  return true;
}

const isSymmetric1 = (root) => {
  let ret = true;

  function helper(node1, node2) {
    if (!node1 && !node2) return;

    if (!node1 || !node2 || node1.val !== node2.val) {
      ret = false;
      return;
    }
    helper(node1.left, node2.right);
    helper(node1.right, node2.left);
  }
  helper(root, root);
  return ret;
};
