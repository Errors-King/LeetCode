/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  const res = []
  const visited = []
  dfs(nums, [])
  return res

  function dfs(nums, temp) {
    if (temp.length === nums.length) {
      res.push([...temp])
      return
    }

    
    let pop = new Map()
    for (let i = 0; i < nums.length; i++) {
      if (visited[i] === true) {
        continue
      }
      if (pop.has(nums[i])) {
        continue
      }
      temp.push(nums[i])
      visited[i] = true
      dfs(nums, temp)
      pop.set(temp.pop(), 1)
      visited[i] = false
    }
  }
};
// @lc code=end

