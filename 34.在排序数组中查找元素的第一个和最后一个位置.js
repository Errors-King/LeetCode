/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

  if (!nums) return [-1, -1];

  /**
   *****工具函数
   * @param {number[]} nums 搜索的数组
   * @param {number} start 起始位置
   * @param {number} end 终止位置
   * @param {number} target 查找的值
   * @param {boolean} type 第一个还是最后一个
   * @returns number, target 的位置
   */

  function binarySearch(nums, start, end, target, type) {
    if (start > end) return -1;

    while (start + 1 < end) {
      let middle = (start + end) >> 1;
      if (nums[middle] === target) {
        if (type === 0) {
          end = middle;
        } else {
          start = middle;
        }
      } else if (nums[middle] < target) {
        start = middle + 1;
      } else {
        end = middle - 1;
      }
    }
    if (type === 0) {
      if (nums[start] === target) return start;
      if (nums[end] === target) return end;
    } else {
      if (nums[end] === target) return end;
      if (nums[start] === target) return start;
    }
    return -1
  }

  let left = binarySearch(nums, 0, nums.length - 1, target, 0)
  let right = binarySearch(nums, 0, nums.length - 1, target, 1)
  return [left, right]
};
// @lc code=end
