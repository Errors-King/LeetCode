/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const paths = path.split('/')
  const stack = []
  for (let p = 0; p < paths.length; p++) {
    const t = paths[p];
    if (t === '..') {
      stack.pop()
    } else if (t && t !=='.') {
      stack.push(t)
    }
  }
  return '/' + stack.join('/')
}; 
// @lc code=end

