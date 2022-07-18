/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let temp = Number.MAX_SAFE_INTEGER;
  let res = null;
  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      
      let sum = nums[i] + nums[left] + nums[right];
      let s = Math.abs(target - sum);

      if (sum === target) return sum;

      if (s < temp) {
        res = sum;
        //忘记更新temp了
        temp = s;
      }

      if (sum < target) {
        left++;
      }
      if (sum > target) {
        right--;
      }
    }
  }
  return res;
};
// @lc code=end
