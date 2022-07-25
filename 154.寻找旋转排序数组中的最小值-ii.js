/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let start = 0
  let end = nums.length - 1
  while (start < end) {
    let middle = (start + end) >> 1
    if (nums[middle] < nums[end]) {
      end = middle
    } else if (nums[middle] > nums[end]) {
      start = middle + 1
    } else {
      end--
    }
  }
  return nums[start]
};
// @lc code=end

