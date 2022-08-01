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
  const visited = new Map()
  const temp = []
  dfs()
  return res


  function dfs() {
    //终止条件

    if (temp.length === nums.length) {
      res.push([...temp])
      return
    }


    for (let i = 0; i < nums.length; i++) {
      if (visited.has(nums[i])) {
        continue
      }
      temp.push(nums[i])
      visited.set(nums[i], 1)
      dfs(nums, temp)
      temp.pop()
      visited.delete(nums[i])
    }
  }
};
// @lc code=end

