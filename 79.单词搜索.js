/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  if (board.length === 0) return false
  if (word.length === 0) return true
  const row = board.length
  const col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const res = back(i, j, 0);
      if (res) {
        return res;
      }
    }
  }
  return false

  function back(i, j, card) {
    if (i >= row || i < 0) return false;
    if (j >= col || j < 0) return false;
    let letter = board[i][j];
    if (letter !== word[card]) return false;
    //来到这里证明lettr和word[card]是相同的
    if (card === word.length - 1) return true;
    board[i][j] = null;
    let res = back(i + 1, j, card + 1) ||
      back(i , j - 1, card + 1) ||
      back(i - 1, j, card + 1) ||
      back(i, j + 1, card + 1)
    board[i][j] = letter
    return res
  }

};
// @lc code=end

