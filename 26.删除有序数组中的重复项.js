/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums
  //采用双指针移动元素
  let m = 0, n = 1
  while(n < nums.length) {
    
    if (nums[m] === nums[n]) {
      n++
    } else {
      nums[++m] = nums[n++]
    }
  }
  return m + 1
};
// @lc code=end

