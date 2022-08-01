/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {

  // DFS
  const res = []
  dfs(n, 1, k, [])
  return res

  function dfs(n, index, k, temp) {
    if (temp.length === k) {
      res.push([...temp])
      return
    }

    for (let i = index; i <= n; i++) {
      temp.push(i)
      dfs(n, i + 1, k, temp)
      temp.pop()
    }
  }
};
// @lc code=end

