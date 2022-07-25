/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
  if (nums.length === 1) return 0
  let start = 0
  let end = nums.length - 1
  while (start + 1 < end) {
    let middle = (start + end) >> 1
    // 判断是否是峰值
    if (isTop(nums, middle)) {
      return middle
    }
    if (isUP(nums, middle)) {
      start = middle
      continue
    }
    if (isDown(nums, middle)) {
      end = middle
    }
  }
  if (isTop(nums, start)) {
    return start
  }
  if (isTop(nums, end)) {
    return end
  }
  if (isDown(nums, start) && start === 0) {
    return 0
  }
  if (isUP(nums, end) && end === nums.length - 1) {
    return nums.length - 1

  }

  function isTop(nums, index) {
    return (nums[index] > nums[index - 1] && nums[index] > nums[index + 1])
  }
  function isUP(nums, index) {
    return nums[index] < nums[index + 1] || nums[index] > nums[index - 1]
  }
  function isDown(nums, index) {
    return nums[index] < nums[index - 1] || nums[index] > nums[index + 1]
  }
};
// @lc code=end

