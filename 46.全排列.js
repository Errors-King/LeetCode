/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = []
  function back(res, temp, nums) {
    if (temp.length === nums.length) {
      res.push([...temp])
    }
    for (let i = 0; i < nums.length; i++) {
      if (temp.includes(nums[i])) continue
      temp.push(nums[i])
      back(res, temp, nums)
      temp.pop()
    }
  }
  back(res, [], nums)
  return res
};
// @lc code=end

