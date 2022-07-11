/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const l3 = new ListNode(0)
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let carry = 0
  while (p1 || p2 || carry) {
    let add = (p1 ? p1.val : 0) + (p2 ? p2.val : 0)
    let cur = (add + carry) % 10
    carry = Math.floor((add + carry) / 10)
    p3.val = cur
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    if (p1 || p2 || carry) {
      p3.next = new ListNode(0)
      p3 = p3.next
    }
  }
  return l3
};
// @lc code=end

