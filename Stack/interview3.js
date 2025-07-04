/*
Stack: Reverse String ( ** Interview Question)
Implement a function called reverseString() that takes a string as input and returns a new string with its characters reversed, using the Stack class provided.



Output:

The method should return a new string with the characters of the input string reversed.



Constraints:

You must use the provided Stack class to reverse the string.

You cannot use built-in string manipulation methods for reversing the string.



Function Signature:

function reverseString(string) {
    // Your implementation goes here
}


Example 1:

const input = "hello";
const output = reverseString(input);

The output should be the string "olleh".





Example 2:

const input = "Udemy";
const output = reverseString(input);

The output should be the string "ymedU".



*/

class Stack {
  constructor() {
    this.stackList = [];
  }

  getStackList() {
    return this.stackList;
  }

  printStack() {
    for (let i = this.stackList.length - 1; i >= 0; i--) {
      console.log(this.stackList[i]);
    }
  }

  isEmpty() {
    return this.stackList.length === 0;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.stackList[this.stackList.length - 1];
    }
  }

  size() {
    return this.stackList.length;
  }

  push(value) {
    this.stackList.push(value);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.stackList.pop();
  }

}

function reverseString(str) {

  const myStack = new Stack()
  let i = 0;
  while (str[i]) {
    myStack.push(str[i])
    i++
  }
  let stackSize = myStack.size()
  let output = ""
  for (let i = 0; i < stackSize; i++) {
    output += myStack.pop()
  }
  return output



}

// WRITE THE REVERSESTRING FUNCTION HERE //
//                                       //
//                                       //
//                                       //
//                                       //
///////////////////////////////////////////



const input1 = "Hello, World!";
const expected1 = "!dlroW ,olleH";
const result1 = reverseString(input1);
console.log(`Input: "${input1}" | Expected: "${expected1}" | Result: "${result1}"`);

const input2 = "abcd";
const expected2 = "dcba";
const result2 = reverseString(input2);
console.log(`Input: "${input2}" | Expected: "${expected2}" | Result: "${result2}"`);

const input3 = "12345";
const expected3 = "54321";
const result3 = reverseString(input3);
console.log(`Input: "${input3}" | Expected: "${expected3}" | Result: "${result3}"`);

const input4 = "";
const expected4 = "";
const result4 = reverseString(input4);
console.log(`Input: "${input4}" | Expected: "${expected4}" | Result: "${result4}"`);


/*
  EXPECTED OUTPUT:
  ----------------
  Input: "Hello, World!" | Expected: "!dlroW ,olleH" | Result: "!dlroW ,olleH"
  Input: "abcd" | Expected: "dcba" | Result: "dcba"
  Input: "12345" | Expected: "54321" | Result: "54321"
  Input: "" | Expected: "" | Result: ""

*/