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

  insert(index, value) {
    if (index > this.length) {
      return this.append(value);
    }
    if (index <= 0) {
      return this.prepend(value);
    }
    const newNode = new Node(value);
    let counter = 0;
    const indexBeforeInterestedNode = index - 1;
    let walkingNode = this.head;
    while (counter <= indexBeforeInterestedNode) {
      // insert newNode to index 2 -> walking node will stop at index (2-1 = 1) and use to be based node to keep existing connection and set new connection to new node
      //      *
      // 0 -- 1 -- 2 -- 3
      //       \   99
      if (counter === indexBeforeInterestedNode) {
        newNode.next = walkingNode.next;
        newNode.prev = walkingNode;
        walkingNode.next = newNode;
        this.length += 1;
      }
      walkingNode = walkingNode.next;
      counter += 1;
    }
    return this;
  }

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
doublyLinkedList.insert(10, 250);
doublyLinkedList.insert(2, 666);
doublyLinkedList.insert(-3, 777);
doublyLinkedList.insert(1, 888);
doublyLinkedList.insert(2, 1050);
console.log(doublyLinkedList);
console.log(doublyLinkedList.printList());
