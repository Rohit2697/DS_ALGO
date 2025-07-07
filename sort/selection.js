
function selectionSort(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    let min = i
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) min = j
    }
    if (i != min) {
      const temp = arr[i]
      arr[i] = arr[min]
      arr[min] = temp
    }
  }
  return arr
}

let myArray = [4, 2, 6, 5, 1, 3];
selectionSort(myArray);
console.log(myArray);