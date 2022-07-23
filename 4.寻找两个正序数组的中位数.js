/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let end = nums1.length + nums2.length - 1
  let left = end >> 1
  let right = (end + 1) >> 1
  let count = -1
  let index1 = 0
  let index2 = 0
  let sum = 0
/**
 * log(m + n) 能是log那就是二分了
 */
  //O(m + n) 
  while (index1 < nums1.length && index2 < nums2.length) {
    if (nums1[index1] > nums2[index2]) {
      count++
      if (count === left) {
        sum += nums2[index2]
      }
      if (count === right) {
        sum += nums2[index2]
        return sum / 2
      }
      index2++
    } else {
      count++
      if (count === left) {
        sum += nums1[index1]
      }
      if (count === right) {
        sum += nums1[index1]
        return sum / 2
      }
      index1++
    }
  }
  while (index1 < nums1.length) {
    count++
    if (count === left) {
      sum += nums1[index1]
    }
    if (count === right) {
      sum += nums1[index1]
      return sum / 2
    }
    index1++
  }
  while (index2 < nums2.length) {
    count++
    if (count === left) {
      sum += nums2[index2]
    }
    if (count === right) {
      sum += nums2[index2]
      return sum / 2
    }
    index2++
  }
};
// @lc code=end

