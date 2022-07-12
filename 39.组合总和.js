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
  //最终结果
  const res = []
  //路径
  const path = []
  back(0, 0)
  return res

  function back(index, total) {
    if (total > target) {
      return 
    }
    if (total === target) {
      res.push([...path])
    }
    for (let i = index; i < candidates.length; i++) {
      let num = candidates[i]
      if (total + num > target) {
        continue
      }
      path.push(num)
      total += num
      back(i, total)
      path.pop()
      total -= num
    }
  }

};
// @lc code=end

