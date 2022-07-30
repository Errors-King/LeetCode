/*
 * @lc app=leetcode.cn id=113 lang=javascript
 *
 * [113] 路径总和 II
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
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

  const res = []
  const temp = []
  dfs(root, 0)
  return res
  function dfs(root, val) {
    if (!root) return
    temp.push(root.val)
    if (!root.left && !root.right && ((val + root.val) === targetSum)) {
      res.push([...temp])
    }
    if (root.left) {
      dfs(root.left, val + root.val)
      temp.pop()
    }
    if (root.right) {
      dfs(root.right, val + root.val)
      temp.pop()
    }
  }
};
// @lc code=end

