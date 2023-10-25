// const basket = ["apples", "grapes", "pears"];

// * linked list : apples --> grapes --> pears

// apples
// 8947  --> grapes
//           8742  --> pears
//                     372  --> null

// 10 --> 5 --> 16

// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value: 5,
//       next: {
//         value: 16,
//         next: null,
//       },
//     },
//   },
// };

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const postNode = new Node(value);

    this.tail.next = postNode;
    this.tail = postNode;
    this.length += 1;
    return this;
  }

  prepend(value) {
    const preNode = new Node(value);

    preNode.next = this.head;
    this.head = preNode;
    this.length += 1;
    return this;
  }

  printList() {
    const printedArray = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      printedArray.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return printedArray;
  }

  // * insert
  // Example
  // insert(2, 99) -> insert 99 at index 2
  // from this: 1 --> 10 --> 5 --> 16
  // to this:  1 -- 10 -               -> 5 -- 16
  //                     \           /
  //                       --> 99 --
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    let counter = 0;
    let tempCurr = this.head;
    // [ 1, 3, 10, 5, 16 ]
    while (counter <= index) {
      if (counter == index - 1) {
        const newNode = new Node(value);
        newNode.next = tempCurr.next;
        tempCurr.next = newNode;
        this.length += 1;
      }
      tempCurr = tempCurr.next;
      counter += 1;
    }
    return this.printList();
  }

  remove(index) {}
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);

myLinkedList.prepend(3);
myLinkedList.prepend(1);

myLinkedList.insert(2, 99);
console.log(myLinkedList.printList());
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
myLinkedList.insert(3, 151);
console.log(myLinkedList.printList());
