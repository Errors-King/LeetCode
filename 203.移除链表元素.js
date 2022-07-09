/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //创建新head方式

  const newHead = new ListNode()
  newHead.next = head
  let p = newHead
  let q = head
  while (q) {
    if (q.val === val) {
      p.next = q.next
      q = q.next
    } else {
      p = p.next
      q = q.next
    }
  }
  return newHead.next
};
// @lc code=end

