class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const linkedListsValueArr = [];
    let counter = 0;
    let tempCurrentNode = this.head;
    while (tempCurrentNode !== null) {
      linkedListsValueArr.push(tempCurrentNode.value);
      tempCurrentNode = tempCurrentNode.next;
      counter++;
    }
    return linkedListsValueArr;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert() {}

  remove() {}
}

const doublyLinkedList = new DoublyLinkedList(5);
console.log(`init doubly linked list = ${JSON.stringify(doublyLinkedList)}`);
doublyLinkedList.append(10);
doublyLinkedList.append(15);
doublyLinkedList.append(20);
console.log(doublyLinkedList);
doublyLinkedList.prepend(3);
doublyLinkedList.prepend(2);
doublyLinkedList.prepend(1);
console.log(doublyLinkedList);
