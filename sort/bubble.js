function bubbleSort(arr) {
  let length = arr.length
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] > arr[j]) {
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}



let myArray = [4, 2, 6, 5, 1, 3];
bubbleSort(myArray);
console.log(myArray);