/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) {
    return null
  }
  const memon = new Map()
  let pointA = headA
  let pointB = headB
  //同时扫描有好处有坏处
  //可能一开始就扫到了，也可能扫很久
  while (pointA || pointB) {
    if (memon.has(pointA)) {
      return pointA
    }
    //这个顺序有讲究，判断不在的时候就立马加入
    //防止一开始就相交或者结束的时候相交
    if (pointA) {
      memon.set(pointA, 1)
      pointA = pointA.next
    }
    if (memon.has(pointB)) {
      return pointB
    }
    if (pointB) {
      memon.set(pointB, 1)
      pointB = pointB.next
    }
  }
  return null
};
// @lc code=end

