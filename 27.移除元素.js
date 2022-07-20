/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let pre = 0
  let cur = 0
  while (cur < nums.length) {
    if (nums[cur] !== val) {
      nums[pre++] = nums[cur++]
      continue
    }
    cur++
  }
  //笑死，不用考虑啊
  // nums.splice(0, pre)
  return pre
};
// @lc code=end

