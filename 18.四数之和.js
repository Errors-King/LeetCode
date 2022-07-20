/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return []
  nums = [...new Set(nums)].sort((a, b) => a - b);
  let res = []
  let leftOne = 0;
  let rightOne = nums.length - 1;
  let big = false;
  let small = false;
  while (leftOne < rightOne) {
    let leftTwo = leftOne + 1;
    let rightTwo = rightOne - 1;
    let sumOne = nums[leftOne] + nums[rightOne];

    if (sumOne > target) {
      rightOne--;
      continue;
    }

    let sumTwo = nums[leftTwo] + nums[rightTwo];
    while (leftTwo < rightTwo) {
      if (sumOne + sumTwo === target) {
        res.push([leftOne, leftTwo, rightTwo, rightTwo]);
      } else if (sumOne + sumTwo > target) {
        big = true;
        rightTwo--;
      } else {
        small = true;
        leftTwo++;
      }
    }
    if (big) {
      rightOne--;
    }
    if (small) {
      leftOne++;
    }
    big = small = false;
  }
  return res;
};
// @lc code=end
