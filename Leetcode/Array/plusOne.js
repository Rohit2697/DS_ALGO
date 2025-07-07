//https://leetcode.com/problems/plus-one/

var plusOne = function (digits) {
  let carry = 0
  for (let i = digits.length-1; i >= 0; i--) {
    digits[i] += 1
    if (digits[i] > 9) {
      carry = Math.floor(digits[i] / 10)
      digits[i] = digits[i] % 10
    } else return digits

  }
  if (carry) digits.unshift(carry)

  return digits
};

console.log(plusOne([9]))