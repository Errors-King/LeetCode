/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
  /**
   * 有重复出现的元素是无法进行二分的
   * 遇到相同的元素的时候根本不知道指针应该网哪边偏
  */
  
  if (!nums) return false
  //先找出分界元素的位置
  let index = findIndex(nums)
  //当分界元素的索引是nums.length - 1时，这个时候有两种情况，
  //  1.可能是没有找到分界元素 2.可能是找到的就是最后一个
  if (index === nums.length - 1) return (binarySearch(nums, 0, index, target) || binarySearch(nums, index, nums.length - 1, target))
  if (target < nums[0]) {
    return binarySearch(nums, index, nums.length - 1, target)
  } else {
    return binarySearch(nums, 0, index - 1, target)
  }

  function binarySearch(nums, start, end, target) {
    while (start + 1 < end) {
      let middle = (start + end) >> 1
      if (nums[middle] === target) {
        return true
      } else if (nums[middle] < target) {
        start = middle + 1
      } else {
        end = middle - 1
      }
    }
    if (nums[end] === target || nums[start] === target) {
      return true
    } else {
      return false
    }
  }
  function findIndex(nums) {
    if (nums.length === 1) return 0
    let pre = 0
    let cur = 1
    while (cur < nums.length){
      if (nums[pre] <= nums[cur]) {
        pre++
        cur++
        continue
      } else {
        return cur
      }
    }
    return nums.length - 1
  }

};
// @lc code=end

