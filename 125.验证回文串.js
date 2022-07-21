/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str = s.toLowerCase()
  //w --> /[a-zA-Z_0-9]/
  //d -->代表的是数字（number）,/[0-9]/可以是数字（number）和数字字符（string）
  let rgx = /\w/
  let left = 0
  let right = str.length - 1
  while (left < right) {
    if (!rgx.test(str[left]) || str[left] === '_') {
      left++
      continue
    }
    if (!rgx.test(str[right]) || str[right] === '_') {
      right--
      continue
    }
    //来这里了，证明两边都是符合规范的
    if (str[left] === str[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

