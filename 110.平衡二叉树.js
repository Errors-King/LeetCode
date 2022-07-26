/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
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
var isBalanced = function(root) {

  return isBalance_function(root)[0]

  function isBalance_function(root) {
    if (!root) {
      return [true, 0]
    }
    let [isBalance_left, left_height] = isBalance_function(root.left)
    let [isBalance_right, right_height] = isBalance_function(root.right)
    let root_height = Math.max(left_height, right_height) + 1

    if (!isBalance_left || !isBalance_right) {
      return [false, right_height]
    }
    if (Math.abs(left_height - right_height) > 1) {
      return [false, right_height]
    }
    return [true, root_height]
  }
  
};
// @lc code=end

