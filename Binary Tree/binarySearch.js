const arr = [1,2,5,5,5,5,5,7];
//二分模板
function binarySearch(arr, start, end, target) {
  if (!arr || start > end) return -1;
  //避免死循环
  while (start + 1 < end) {
    let middle = (start + end) >> 1
    if (arr[middle] === target) {
      //要是无重复数字，可以直接返回middle
      // return middle

      //要是有重复数字，看是要找到第一个，还是最后一个
      start = middle
    } else if (arr[middle] < target) {
      start = middle + 1
    } else {
      end = middle - 1
    }
  }
  if (arr[end] === target) {
    return end
  }
  if (arr[start] === target) {
    return start
  }

  return -1
}

console.log(binarySearch(arr, 0, arr.length - 1, 5))
