/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let minLength = Number.MAX_SAFE_INTEGER
  let N = nums.length - 1
  let left = 0, right = 0
  let total = nums[left]
  while (right <= N && left <= right) {
    let is = total >= target
    if (is) {
      minLength = Math.min(minLength, (right - left + 1))
      total -=  nums[left]
      left++
    } else {
      total += nums[++right]
    }
  }
  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength
};
// @lc code=end

