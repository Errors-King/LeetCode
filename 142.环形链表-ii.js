/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (!head || !head.next) return null
  //为每个节点增加一个flag属性，标志已经访问过
  //当遇到有flag属性的节点，那么就是他已经访问过了
  //那么就是从他开始有环的

  //如果不适用标记的话，那么就蜕变成纯数学问题了
  let p = head
  while(p) {
    if (p.flag) {
      return p
    } else {
      p.flag = 1
      p = p.next
    }
  }
  return null
};
// @lc code=end

