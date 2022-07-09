/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  //if head is null or head.next is null, only return head
  if (!head || !head.next) return head

  //使用三个指针移动
  // let pre = null
  // let cur = head
  // let next = head.next
  // while (next) {
  //   cur.next = pre
  //   pre = cur
  //   cur = next
  //   next = next.next
  // }
  // cur.next = pre
  // return cur

  //递归方式
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newHead
};
// @lc code=end

