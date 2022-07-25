/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
// two point
  // let left = 0
  // let right = numbers.length - 1
  // while (left + 1 < right) {
  //   let sum = numbers[left] + numbers[right]
  //   if (sum === target) {
  //     return [left+1, right+1]
  //   }
  //   if (sum < target) {
  //     left++
  //   } else {
  //     right--
  //   }
  // }
  // if (numbers[left] + numbers[right] === target) {
  //   return [left+1, right+1]
  // }

// binary search
  let left = 0
  let right = numbers.length - 1
  while (left + 1 < right) {
    let middle = (left + right) >> 1
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1]
    }
    if (numbers[middle] + numbers[left] >= target) {
      right = middle
      continue
    }
    if (numbers[left] + numbers[right] > target) {
      right--
    } else {
      left++
    }
  }
  if (numbers[left] + numbers[right] === target) {
    return [left + 1, right + 1]
  }
};
// @lc code=end

