/**
 * HT: Find Duplicates ( ** Interview Question)
In this exercise, you are required to write a JavaScript function called findDuplicates. This function will take an array of numbers as its only parameter. Your goal is to identify and return all the numbers that appear more than once in the array.

The function should return a new array containing the duplicate numbers. The function should return an empty array if there are no duplicate numbers.



Examples:

findDuplicates([1, 2, 3, 4, 4, 5, 6, 6]) should return [4, 6] because the numbers 4 and 6 appear more than once.

findDuplicates([1, 2, 3]) should return [] because there are no duplicate numbers.





To solve this problem, you can use one of two types of hash tables available in JavaScript:

Map: A built-in object that lets you store key-value pairs in an organized manner.

Object: A fundamental data structure in JavaScript that can also be used as a hash table for storing key-value pairs.



You are encouraged to solve this exercise using either a Map or an Object, and you can even try both approaches for extra practice!


 */

//   +======================================================+
//   |                WRITE YOUR CODE HERE                  |
//   | Description:                                         |
//   | - This function finds duplicate numbers in an array. |
//   |                                                      |
//   | Return type: array                                   |
//   | - Returns an array containing the duplicate numbers. |
//   |                                                      |
//   | Tips:                                                |
//   | - You can use either a Map or an object for          |
//   |   counting occurrences of each number.               |
//   | - Example with Map:                                  |
//   |   numCounts.set(num, (numCounts.get(num) || 0) + 1); |
//   | - Example with object:                               |
//   |   numCounts[num] = (numCounts[num] || 0) + 1;        |
//   +======================================================+



class HT {
  constructor(size = 7) {
    this.dataMap = new Array(size)
    this.duplicate = {}
  }
  _hash(key) {
    return (key * 23) % this.dataMap.length
  }
  set(element) {
    const index = this._hash(element)
    if (!this.dataMap[index]) this.dataMap[index] = []

    for (let i = 0; i < this.dataMap[index].length; i++) {

      if (this.dataMap[index][i][0] == element) {

        if (!this.duplicate[element]) {
          this.duplicate[element] = true
        }
      }
    }
    this.dataMap[index].push([element, true])

  }


}

function findDuplicates(arr) {


  const totalSize = arr.length
  let duplicate=[]
  const ht = new HT(totalSize)

  for (let i = 0; i < totalSize; i++) {
    ht.set(arr[i])
  }
  const htDuplicateObjarr = Object.entries(ht.duplicate)
  for (let i = 0; i < htDuplicateObjarr.length;i++){
    duplicate.push(parseInt(htDuplicateObjarr[i][0]))
  }
  return duplicate


}

// ---------------
// No Duplicates
// ---------------
console.log("No Duplicates:");
console.log("Input: [1, 2, 3, 4, 5]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 3, 4, 5])));
console.log("---------------");

// ---------------
// Single Duplicate
// ---------------
console.log("Single Duplicate:");
console.log("Input: [1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Multiple Duplicates
// ---------------
console.log("Multiple Duplicates:");
console.log("Input: [1, 1, 2, 2, 3, 4]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 2, 2, 3, 4])));
console.log("---------------");

// ---------------
// Repeating Duplicates
// ---------------
console.log("Repeating Duplicates:");
console.log("Input: [1, 1, 1, 2, 2, 2, 3]");
console.log("Output: ", JSON.stringify(findDuplicates([1, 1, 1, 2, 2, 2, 3])));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", JSON.stringify(findDuplicates([])));
console.log("---------------");

// ---------------
// Single Element
// ---------------
console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", JSON.stringify(findDuplicates([1])));
console.log("---------------");


