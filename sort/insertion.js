

function insertionSort(arr) {
  const length = arr.length
  for (let i = 0; i < length; i++) {
    let temp = arr[i]
    for (var j = i - 1; arr[j] > temp && j > -1; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = temp
  }
  return arr
}
let myArray = [4, 2, 6, 5, 1, 3];
insertionSort(myArray);
console.log(myArray);
