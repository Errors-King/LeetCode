/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums) return -1
  let N = nums.length - 1
  let left = 0
  let right = N
  let minIndex = 0
  if (nums[N] >= nums[0]) {
    minIndex = 0
  } else {
    while (left + 1 < right) {
      let middle = (left + right) >> 1
      if (nums[middle] < nums[middle + 1] && nums[middle] < nums[middle - 1]) {
        minIndex = middle
        break
      }
      if (nums[middle] > nums[0]) {
        left = middle + 1
        continue
      }
      if (nums[middle] < nums[0]) {
        right = middle - 1
      }
    }
    if (minIndex === 0) {
      minIndex = nums[left] < nums[right] ? left : right
    }
  }
  if (target < nums[minIndex]) return -1
  if (target >= nums[0]) {
    let right = minIndex === 0 ? N : minIndex - 1
    return binarySearch(nums, 0, right, target)
  }
  if (target >= nums[minIndex]) {
    return binarySearch(nums, minIndex, N, target)
  }

  function binarySearch(nums, left, right, target) {
    while (left + 1 < right) {
      let middle = (left + right) >> 1
      if (nums[middle] === target) {
        return middle
      } else if (nums[middle] > target) {
        right = middle - 1
      } else {
        left = middle + 1
      }
    }
    if (nums[left] === target) return left
    if (nums[right] === target) return right
    return -1
  }

  return -1
};
// @lc code=end

