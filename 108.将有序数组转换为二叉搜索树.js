/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  //分治
  if (nums.length === 0) return null
  if (nums.length === 1) return new TreeNode(nums[0])
  const head = new TreeNode(null)

  let middle = (nums.length - 1) >> 1

  head.val = nums[middle]

  let leftHead = sortedArrayToBST(nums.slice(0, middle))
  let rightHead = sortedArrayToBST(nums.slice(middle + 1))

  head.left = leftHead
  head.right = rightHead
  
  return head

};
// @lc code=end

