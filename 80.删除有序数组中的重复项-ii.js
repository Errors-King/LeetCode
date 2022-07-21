/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 3) return;
  let cur = 0
  let pre = 0
  let index = 0
  while (cur < nums.length) {
    if (nums[cur] === nums[pre] && ((cur - pre) <= 1)) {
      nums[index++] = nums[cur++]
      continue
    }
    if (nums[cur] === nums[pre] && (cur - pre > 1)) {
      cur++
      continue
    }
    if (nums[cur] !== nums[pre]) {
      nums[index++] = nums[cur]
      pre = cur++
    }
  }
  return index
};
// @lc code=end

