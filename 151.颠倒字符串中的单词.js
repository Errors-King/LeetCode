/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 颠倒字符串中的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let str = s.trim()
  if (str.length < 2) {
    return str
  }
  let flag = str.length - 1
  let left = str.length - 2
  let right = str.length - 1
  let res = ''
  //不开辟新空间，从后面开始扫面，扫到单词加到res当中
  while (left >= 0) {
    //一个单词的末尾
    if (str[left] === ' ' && str[right] !== ' ') {
      res = res + str.slice(right, flag + 1) + ' '
      right--
      left--
      continue
    }
    //单词中，或者是空格
    if ((str[right] !== ' ' && str[left] !== ' ') || (str[right] === ' ' && str[left] === ' ')) {
      right--
      left--
      continue
    }
    //单词的开始
    if (str[left] !== ' ' && str[right] === ' ') {
      flag = left--
      right--
    }
  }
  //最后一个单词需要手动加入再返回
  //因为扫面的循环是不会遇到单词分割处的
  return res  + str.slice(left + 1, flag + 1)

};
// @lc code=end

