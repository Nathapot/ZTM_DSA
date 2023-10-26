class Stack {
    constructor() {
      this.items = [];
    }
  
    // Push: Add an element to the top of the stack.
    push(element) {
      this.items.push(element);
    }
  
    // Pop: Remove and return the top element from the stack.
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Peek: Return the top element without removing it.
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty.
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the stack.
    size() {
      return this.items.length;
    }
  
    // Clear the stack.
    clear() {
      this.items = [];
    }
  
    // Print the stack elements.
    print() {
      return this.items;
    }
  }
  
  // Example usage:
  const myStack = new Stack();
  
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  
  console.log(myStack.peek()); // 3
  console.log(myStack.pop());  // 3
  console.log(myStack.print()); // [1, 2]
  
  myStack.clear();
  console.log(myStack.isEmpty()); // true
  