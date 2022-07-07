/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const left = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] in left) {
      stack.push(s[i])
    } else {
      let res = stack[stack.length - 1] + s[i]
      if (res === '()' || res === '{}' || res === '[]') {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return !stack.length
};
// @lc code=end

