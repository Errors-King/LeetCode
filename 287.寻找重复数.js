/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
//以为是出现一次或者两次。。。。。
  // return nums.reduce((res, cur, index) => {
  //   return res ^ cur ^ index
  // }, 0)
//与题142思想一样的，快慢指针
  let slow = 0
  let fast = 0
  slow = nums[slow]
  fast = nums[nums[fast]]
  while (slow !== fast) {
    slow = nums[slow]
    fast = nums[nums[fast]]
  }
  let p1 = 0
  let p2 = slow
  while (p1 !== p2) {
    p1 = nums[p1]
    p2 = nums[p2]
  }
  return p1
};
// @lc code=end

