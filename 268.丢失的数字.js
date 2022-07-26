/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let total = (0 + nums.length) * (nums.length + 1) / 2
  let sum = nums.reduce((sum, cur) => sum + cur, 0)
  return total - sum
};
// @lc code=end

