function merge(arr1, arr2) {
  let combined = []
  let i = 0, j = 0

  while (i < arr1.lenghth || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      combined.push(arr1[i])
      i++
    }
    else {
      combined.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    combined.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    combined.push(arr2[j])
    j++
  }
  return combined
}


function mergeSort(arr) {
  if (arr.length == 1) return arr
  const midIndex = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, midIndex))
  const right = mergeSort(arr.slice(midIndex))
  return merge(left, right)
}

// let myArray1 = [1, 3, 7, 8];
// let myArray2 = [2, 4, 5, 6];
// console.log(merge(myArray1, myArray2));

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6, 7, 8 ]

*/

let originalArray = [3, 1, 4, 2];
let sortedArray = mergeSort(originalArray);

console.log("Original Array:", originalArray);
console.log("\nSorted Array:", sortedArray);