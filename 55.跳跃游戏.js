/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let count = 0
  let res = nums.length - 1
  //往前走，但是不能超过上一个位置的可到达区域
  for (let i = 0; i <= count; i++) {
    count = Math.max(nums[i] + i, count)
    if (count >= res) return true
  }
  return false
};
// @lc code=end

