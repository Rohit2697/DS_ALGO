//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function (nums) {
  const newSet = new Set()
  for (let num of nums) {
    newSet.add(num)
  }

  const newSetArr = Array.from(newSet)
  for (let i = 0; i < newSetArr.length; i++) {
    nums[i] = newSetArr[i]
  }
  for (let i = newSetArr.length; i < nums.length; i++) {
    nums[i] = '_'
  }
  return newSetArr.length

};
let nums = [1, 1, 2]
const k = removeDuplicates(nums)
console.log(nums, k)