//快速排序
import { arr } from '../var'
//利用开辟空间
function quickSort1(arr: number[]): number[] {

  //数组长度小于2就没必要排序了
  if (arr.length < 2) return arr

  const left: number[] = []
  const right: number[] = []

  //不可取，会出现栈溢出
  // 分析原因： 把小于基准的放左边，大于等于基准的放右边，当哪一边的数据都是一样的时候，那递归调用的时候，那相同数据的部分会一直不变
  // arr.forEach(item => {
  //   if (item < arr[0]) {
  //     left.push(item)
  //   } else {
  //     right.push(item)
  //   }
  // })
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item < arr[0]) {
      left.push(item)
    } else {
      right.push(item)
    }
  }
  //递归分组连接
  return quickSort1(left).concat(arr[0]).concat(quickSort1(right))
}

console.log(quickSort1(arr))


// 原地快排  不开辟新的空间
// 基本思路：依靠双指针

// function quickSort2 (arr: number[], start: number, end: number): void{
//   if (end - start < 1) return
//   let i = start
//   let j = end
//   if (i < j) {
//     while (i<=j) {
      
//     }
//   } else {
//     quickSort2(arr, start, i)
//     quickSort2(arr, i + 1, end)
//   }
// }

