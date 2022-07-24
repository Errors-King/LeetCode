/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  /**
   * 基本思路：
   *    两次二分
   *    先通过找出可能出现target的row
   *    再对这个row进行二分查找target
   */
  if (matrix[0][0] > target || !matrix) return false
  let left = 0
  let right = matrix[0].length - 1
  let row = matrix[findRow(matrix, 0, matrix.length - 1, target)]
  while (left + 1 < right) {
    let middle = (left + right) >> 1
    if (row[middle] === target) return true
    if (row[middle] < target) {
      left = middle + 1
    }
    if (row[middle] > target) {
      right = middle - 1
    }
  }
  if (row[left] === target) return true
  if (row[right] === target) return true
  return false
  // search row
  function findRow(matrix, start, end, target) {
    while (start + 1 < end) {
      let middle = (start + end) >> 1
      if (target >= matrix[middle][0] && target < matrix[middle + 1][0]) {
        return middle
      }
      if (target > matrix[middle][0]) {
        start = middle
      }
      if (target < matrix[middle][0]) {
        end = middle
      }
    }
    if (matrix[end][0] > target) {
      return start
    } else {
      return end
    }
  }
};
// @lc code=end

