/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) return []
  const res = []
  let stack = [root]
  while (stack.length) {
    let middleRes = []
    let len = stack.length
    for (let _ = 0; _ < len; _++) {
      let pop = stack.shift()
      middleRes.push(pop.val)
      if (pop.left) {
        stack.push(pop.left)
      }
      if (pop.right) {
        stack.push(pop.right)
      }
    }
    res.push(middleRes)
  }
  return res.reverse()
};
// @lc code=end

