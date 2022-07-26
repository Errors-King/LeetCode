/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (matrix[0][0] > target) return false
  let left = 0
  let right = matrix.length - 1
  let index = null//记录最后一个小于等于target的开头
  //找最后一个小于target的开头行O(logn)  (这个操作可有可无不影响数量级)
  while (left + 1 < right) {
    let middle = (left + right) >> 1
    if (matrix[middle][0] <= target) {
      left = middle
    } else {
      right = middle
    }
  }
  if (matrix[right][0] <= target) {
    index = right
  }
  if (index === null && matrix[left][0] <= target) {
    index = left
  }
  //查找target O(n)
  let i = index, j = 0
  while (i >= 0 && j <= matrix[0].length - 1) {
    let cur = matrix[i][j]
    if (cur === target) {
      return true
    } else if (cur > target) {
      i--
    } else {
      j++
    }
  }
  return false
};
// @lc code=end

