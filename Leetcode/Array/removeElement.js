//https://leetcode.com/problems/remove-element/description/

var removeElement = function (nums, val) {


    const len = nums.length
    if(len<2 && nums[0]!=val)return 1
  const newArr = nums.filter(v => v != val)
  
  let k = newArr.length
  //let j = 0;
  for (let i = 0; i < k; i++) {
    nums[i] = newArr[i]
    nums[len - k + i] = '_'

  }
  return k
};


// var removeElement = function (nums, val) {
//   let writeIndex = 0;
//   for (let readIndex = 0; readIndex < nums.length; readIndex++) {
//     if (nums[readIndex] !== val) {
//       nums[writeIndex] = nums[readIndex];
//       writeIndex++;
//     }
//   }

//   return writeIndex;
// };

console.log(removeElement([3, 2, 2, 3], 3))