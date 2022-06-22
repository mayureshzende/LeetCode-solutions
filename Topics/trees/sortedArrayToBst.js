/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  const length = nums.length;
  if (length === 0) return null;
  if (length === 1) return new TreeNode(nums[0]);

  // get the root node which is always at the center
  // if it is odd then consider right one
  let centerIdx = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[centerIdx]);

  // for the left half of the the tree
  let lst = nums.slice(0, centerIdx);
  root.left = sortedArrayToBST(lst);
  // for the right half of the tree
  let rst = nums.slice(centerIdx + 1, length);
  root.right = sortedArrayToBST(rst);

  // return the top root node
  return root;
};
