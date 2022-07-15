/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let five = 0
  let ten = 0
  //20的找不了零
  for (let i = 0; i < bills.length; i++) {
    // 客人给五块的
    if (bills[i] === 5) {
      five++
    }
    // 客人给十块的
    if (bills[i] === 10) {
      if (--five < 0) {
        return false
      }
      ten++
    }
    //给20的
    if (bills[i] === 20) {
      // 两种找零方式
      if (five >= 1 && ten >= 1) {
        five--
        ten--
        continue
      }
      if (five >= 3) {
        five -= 3
        continue
      }
      //都找不了就return false
      return false
    }
  }
  return true
};
// @lc code=end

