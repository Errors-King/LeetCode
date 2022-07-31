/*
 * @lc app=leetcode.cn id=1161 lang=javascript
 *
 * [1161] 最大层内元素和
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
 * @return {number}
 */
var maxLevelSum = function(root) {
  //BFS
  const stack = [root]
  let length = stack.length
  let sum = 0
  let count = 1
  let res = 0
  let max = -Number.MAX_SAFE_INTEGER
  while (stack.length) {
    if (length === 0) {

      if (sum > max) {
        max = sum
        res = count
      }

      length = stack.length
      sum = 0
      count++
    }

    let pop = stack.shift()
    sum += pop.val

    pop.left && stack.push(pop.left)
    pop.right && stack.push(pop.right)
    length--
  }
  return max >= sum ? res : count//如果没加等号就会有一点点问题
};
// @lc code=end

