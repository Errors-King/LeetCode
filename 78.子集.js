/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = []
  for (let i = 0; i <= nums.length; i++) {
    dfs(nums, i, 0, [])
  }
  return res

  function dfs(nums, length, index, temp) {
    if (temp.length === length) {
      res.push([...temp])
      return
    }

    for (let i = index; i < nums.length; i++) {
      temp.push(nums[i])
      dfs(nums, length, i + 1, temp)
      temp.pop()
    }
  }
};
// @lc code=end

