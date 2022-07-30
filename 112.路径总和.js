/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let flag = false
  dfs(root, 0)
  return flag

  function dfs(root, val) {
    if (!root) return

    if (root.left && !flag) dfs(root.left, val + root.val)
    if (root.right && !flag) dfs(root.right, val + root.val)

    if (!root.left && !root.right && root.val + val === targetSum) flag = true
  }
};
// @lc code=end

