function handleArray(nums: number[]) {
  let start = 0
  let end = nums.length - 1
  let temp: number[] = []
  mergeSort(nums, start, end, temp)
  console.log(nums)
}

function mergeSort (nums: number[], start: number, end: number, temp: number[]) {
  if (start >= end) return
  mergeSort(nums, start, (start + end) >> 1, temp)
  mergeSort(nums, ((start + end) >> 1) + 1, end, temp)
  merge(nums, start, end, temp)

 
}

function merge(nums: number[], start: number, end: number, temp: number[]) {
  if (start >= end) return;
  let middle = (start + end) >> 1
  let leftIndex = start
  let rightIndex = middle + 1
  let index = leftIndex
  while (leftIndex <= middle && rightIndex <= end) {
    if (nums[leftIndex] < nums[rightIndex]) {
      temp[index++] = nums[leftIndex++]
    } else {
      temp[index++] = nums[rightIndex++]
    }
  }
  while(leftIndex <= middle) {
    temp[index++] = nums[leftIndex++]
  }
  while(rightIndex <= end) {
    temp[index++] = nums[rightIndex++]
  }
  for (let i = start; i <= end; i++) {
    nums[i] = temp[i]
  }

}

handleArray([1,3,2,5,3,4])