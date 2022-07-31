/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  // BFS
  if (!root) return []
  const stack = [root]
  let length = stack.length
  const res = []

  while (stack.length) {
    if (!length) {
      length = stack.length
    }

    //每一层的最后一个push到res中
    let pop = stack.shift()
    if (length === 1) {
      res.push(pop.val)
    }

    if (pop.left) {
      stack.push(pop.left)
    }

    if (pop.right) {
      stack.push(pop.right)
    }

    length--
  }

  return res
};
// @lc code=end

