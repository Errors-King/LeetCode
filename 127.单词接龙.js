/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return 0
  const map = new Map()
  const queue = [beginWord]
  let point = 0
  map.set(beginWord, 1)

  while (point <= queue.length - 1) {
    let pop = queue[point++]
    if (pop === endWord) return map.get(pop)

    for (let i = 0; i < wordList.length; i++) {
      if (!map.has(wordList[i]) && isSimilar(pop, wordList[i])) {
        map.set(wordList[i], map.get(pop) + 1)
        queue.push(wordList[i])
      }
    }

  }
  return 0

  //查找wordList中存在的邻居单词
  // function findNextWords(word, wordList) {
  //   const char = 'abcdefghijklmnopqrstuvwxyz'
  //   const nextWords = []
  //   for (let i = 0; i < word.length; i++) {
  //     let left = word.slice(0, i), right = word.slice(i + 1)
  //     for (item of char) {
  //       if (item === word[i]) {
  //         continue
  //       } else {
  //         let str = left + item + right
  //         if (wordList.includes(str)) nextWords.push(str)
  //       }
  //     }
  //   }
  //   return nextWords
  // }

  //判断两个单词是否相似
  function isSimilar(word1, word2) {
    let diff = 0
    for (let i = 0; i < word1.length; i++) {
      if (word1[i] === word2[i]) {
        continue
      } else {
        if (++diff >= 2) return false
      }
    }
    return true
  }

};
// @lc code=end

