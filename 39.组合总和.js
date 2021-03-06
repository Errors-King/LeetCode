/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const res = []
  const temp = []
  dfs(candidates, 0, 0)
  return res

  function dfs(candidates, index, total) {
    if (total > target) return
    if (total === target) {
      res.push([...temp])
      return
    }
    for (let i = index; i < candidates.length; i++) {
      temp.push(candidates[i])
      dfs(candidates, i, total + candidates[i])
      temp.pop()
    }
  }
};
// @lc code=end

