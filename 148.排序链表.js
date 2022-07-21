/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
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
var sortList = function(head) {
  if (!head || !head.next) return head
//暴力的一批，先把数据存起来，再排个序，然后再一个个填上去
  const momen = []
  let p = head
  while (p) {
    momen.push(p.val)
    p = p.next
  }
  momen.sort((a, b) => a-b)
  p = head
  for (let i = 0; i < momen.length; i++) {
    p.val = momen[i]
    p = p.next
  }


//考虑不开辟空间，原地排序
/**
 * 
 */
  return head
};
// @lc code=end

