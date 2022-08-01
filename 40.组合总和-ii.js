/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const res = []
  const temp = []
  candidates.sort()
  dfs(candidates, 0, 0)
  return res

  function dfs(candidates, index, total) {
    if (total > target) return
    if (total === target) {
      res.push([...temp])
      return
    }

    //记录上一次pop的值
    let pop
  
    for (let i = index; i < candidates.length; i++) {
      //如果本次需要push的元素和上一次pop的值是一样的就别push了
      if(pop === candidates[i]) continue

      temp.push(candidates[i])
      dfs(candidates, i + 1, total + candidates[i])
      pop = temp.pop()
    }
  }
};
// @lc code=end

