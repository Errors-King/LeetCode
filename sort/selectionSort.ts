//插入排序

import { arr } from '../var'

function selectionSort(arr: number[]): void {
  for (let j = arr.length - 1; j > 0; j--) {
    let maxIndex = 0;
    for (let i = 1; i <= j; i++) {
      
      if (arr[i] > arr[maxIndex]) {
        maxIndex = i
      }

    }
    let temp = arr[j]
    arr[j] = arr[maxIndex]
    arr[maxIndex] = temp
  }
}

selectionSort(arr)
console.log(arr)

