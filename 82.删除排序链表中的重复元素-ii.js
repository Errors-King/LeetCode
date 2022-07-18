/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
var deleteDuplicates = function (head) {
  if (!head || !head.next) return head;
  //创建虚拟节点，方便删除头元素
  let newHead = new ListNode(null);
  newHead.next = head;
  let pre = newHead;
  let first = head;
  let second = head.next;
  //标志是否出现重复的元素
  let flag = false;
  while (second) {
    if (first.val === second.val) {
      flag = true;
      second = second.next;
      continue;
    }
    if (flag) {
      pre.next = second;
      first = second;
      second = first.next;
      flag = false
    } else {
      pre = pre.next
      first = first.next
      second = second.next
    }
  }
  if (flag) {
    pre.next = second
  }
  return newHead.next;
};
// @lc code=end
