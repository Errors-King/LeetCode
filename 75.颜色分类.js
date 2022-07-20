/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let left = 0
  let right = nums.length - 1
  let p = 0
  //真的要把边界条件条件写好啊，不然老是出问题啊
  while (p <= right && left <= right) {
    if (left >= p) {
      p = left
    }
    if (nums[p] === 0) {
      [nums[p], nums[left]] = [nums[left], nums[p]]
      left++
      continue
    }
    if (nums[p] === 2) {
      [nums[p], nums[right]] = [nums[right], nums[p]]
      right--
      continue
    }
    if (nums[p] === 1) {
      p++
    }
  }
};
// @lc code=end

