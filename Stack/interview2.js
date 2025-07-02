// Stack: Pop for a Stack That Uses an Array( ** Interview Question)
// Implement a method called pop() for the Stack class that we created in the last exercise.The method removes and returns the top element from the stack.



//   Output:

// The method should remove the top element from the stack and return its value.If the stack is empty, the function should return null.



//   Constraints:

// The stack should be implemented using an array.

//   You cannot use built-in methods to manipulate the stack, except for the pop() method of the array.





//     Example 1:

// Suppose you have a Stack object, stack, with the following values:
// [1, 2, 3, 4]

// After calling the pop() function:

//   let poppedValue = stack.pop();


// The stack should now have the following values:
// [1, 2, 3], and the poppedValue should be 4.





// Example 2:

// Now suppose you have a Stack object, stack, with the following values:
// ['apple', 'banana', 'orange', 'grape']

// After calling the pop() function:

//   let poppedValue = stack.pop();


// The stack should now have the following values:
// ['apple', 'banana', 'orange'], and the poppedValue should be 'grape'.


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
  
  pop(){
  if(this.stackList.length==0)return null
  return this.stackList.pop()
  }
  // WRITE THE POP METHOD HERE // 
  //                           //
  //                           //
  //                           //
  //                           //
  ///////////////////////////////

}
