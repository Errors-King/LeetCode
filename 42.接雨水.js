/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {

  if (height.length < 3) return 0
  let left = 0
  let right = 1
  let res = 0
  while (right < height.length) {
    if (height[right] >= height[left]) {
      res += calWater(left, right, height)
      left = right
    }
    right++
  }
  return res
  //计算区间雨水数量函数
  function calWater(left, right, height) {
    let sum = 0
    let min = Math.min(height[left], height[right])
    for (let i = left + 1; i < right; i++) {
      let s = min - height[i]
      sum += s >= 0 ? s : 0
    }
    return sum
  }
};
// @lc code=end

