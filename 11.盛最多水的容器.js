/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.legnht < 3) {
    return height[0] * height[1]
  }
  let max = 0
  let left = 0
  let right = height.length - 1
  while (left < right) {
    let area = (right - left) * (Math.min(height[left], height[right]))
    if (area > max) max = area

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }
  return max
};
// @lc code=end

