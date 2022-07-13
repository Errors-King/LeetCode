/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  //脑子很不清醒
  function single(index) {
    let left = index - 1
    let right = index + 1
    let temp = ''
    while (left >= 0 && right <= (s.length - 1)) {
      if (s[left] !== s[right]) {
        temp = s.slice(left + 1, right)
        res = temp.length > res.length ? temp : res
        return
      }
      right++
      left--
    }
    temp = s.slice(left + 1, right)
    res = temp.length > res.length ? temp : res
  }
  function double(leftIndex, rightIndex) {
    if (leftIndex < 0 || rightIndex > s.length - 1) return
    let left = leftIndex
    let right = rightIndex
    let temp = ''
    while (left >= 0 && right <= (s.length - 1)) {
      if (s[left] !== s[right]) {
        temp = s.slice(left + 1, right)
        res = temp.length > res.length ? temp : res
        return
      }
      right++
      left--
    }
    temp = s.slice(left + 1, right)
    res = temp.length > res.length ? temp : res
  }
  if (s.length === 1) return s
  let res = ''
  for (let i = 0; i < s.length; i++) {
    single(i)
    double(i, i + 1)
  }
  return res
};
// @lc code=end

