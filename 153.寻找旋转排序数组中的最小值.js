/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  if (nums.length < 2 || nums[0] < nums[nums.length - 1]) return nums[0];
  let start = 0
  let end = nums.length - 1
  while (start + 1 < end) {
    let middle = (start + end) >> 1
    if (isTarget(nums, middle)) {
      return nums[middle]
    }
    if (nums[middle] > nums[0]) {
      start = middle + 1
    }
    if (nums[middle] < nums[0]) {
      end = middle - 1
    }
  }
  if (isTarget(nums, start)) {
    return nums[start]
  }
  if (isTarget(nums, end)) {
    return nums[end]
  }
  function isTarget(nums, index) {
    return nums[index] < nums[index - 1]
  }
};
// @lc code=end

