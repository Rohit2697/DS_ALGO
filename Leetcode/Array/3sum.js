//https://leetcode.com/problems/3sum/description/



/**
 * 
 *   let trplet = []
  let newNumSet = new Set()
  nums.forEach(element => {
    newNumSet.add(element)
  });
  console.log(newNumSet)

  function twoSum(target) {//target i
    let twoSumsets = []
    newNumSet.forEach(value => {
      const toFind = target - value
      console.log(target, toFind)
      if (newNumSet.has(toFind)) twoSumsets.push([value, toFind])

    })
    return twoSumsets
  }
  newNumSet.forEach(value => {

    const res = twoSum(value * -1)
    if (res.length) {
      res.forEach(ele => trplet.push([...ele, value]))
    }
  })
  return trplet
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum == 0) {
        result.push([nums[i], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] == nums[left - 1]) left++
        while (left < right && nums[right] == nums[right + 1]) right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return result

};

console.log(threeSum([0, 0, 0, 0]))// this works 
console.log(threeSum([-1, 0, 1, 2, -1, -4]))//this works 
console.log(threeSum([0, 1, 1]))//this works
console.log(threeSum([-10, -2, -2, -3, -4, -4, -5, -5, 0, 0, 1, 2, 2, 2, 2, 5, 5])) // this failed
//expected: [[-10,5,5],[-5,0,5],[-4,2,2],[-3,-2,5],[-3,1,2],[-2,0,2]]
//output: [[2,2,-4],[2,-3,1],[2,0,-2],[2,-2,0],[2,-4,2],[5,5,-10]]



//