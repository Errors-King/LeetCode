//冒泡排序（可优化）
import { arr } from '../var'
function bubbleSort(arr: number[]) {

  const n = arr.length - 1
  for (let i = 0; i < n; i++) {

    let sorted: boolean = true // 优化操作

    //每排一次都会把最大的排到最后面，
    //所以j需要减去排过的次数
    for (let j = 0; j < n - i; j++) {
      if (arr[j] > arr[j + 1]) {
        //解构优化，减少中间变量
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

        sorted = false

      }
    }
    //后续已经排序好了就跳出循环
    if (sorted) {
      break
    }

  }
}
bubbleSort(arr)
console.log(arr)
