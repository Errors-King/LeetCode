/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function(root) {

  if (!root) return []

  const stack = [root]
  const res = []

  while (stack.length) {

    let pop = stack.pop()
    res.push(pop.val)

    if (pop.right) {
      stack.push(pop.right)
    }

    if (pop.left) {
      stack.push(pop.left)
    }

  }

  return res
};
// @lc code=end

