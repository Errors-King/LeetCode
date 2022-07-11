/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //O(n^2)
  // for (let i = 0; i <= nums.length; i++) {
  //   let target2 = target - nums[i]
  //   let p = i + 1
  //   while (p < nums.length) {
  //     if (nums[p] === target2) return [i, p]
  //     else p++
  //   }
  // }


  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let target2 = target - nums[i]
    if (!map.has(target2)) {
      map.set(nums[i], i)
    } else {
      return [map.get(target2), i]
    }
  }
};
// @lc code=end

