/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  if(nums.length < 2) return
  let font = nums.length - 2
  let last = nums.length - 1
  if (nums[last] > nums[font]) {
    [nums[font], nums[last]] = [nums[last], nums[font]]
    return
  }
  while (font >= 0) {
    if (nums[font] >= nums[last]) {
      font--
      last--
      continue
    }
    handleNext(font, nums)
    return
  }
  //到了这里证明是一个递减的序列
  //那么代表是最大的,它的下一个就是最小的
  //reserve就可以了
  reserve(0, nums.length - 1, nums)

  function handleNext(index, nums) {
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[i] > nums[index] && nums[i + 1] <= nums[index]) {
        [nums[i], nums[index]] = [nums[index], nums[i]]
        reserve(index + 1, nums.length - 1, nums)
        
        return
      }
    }
    [nums[index], nums[nums.length - 1]] = [nums[nums.length - 1], nums[index]]
    reserve(index + 1, nums.length - 1, nums)
  }
  function reserve(start, end, nums) {
    while(start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }
};
// @lc code=end

