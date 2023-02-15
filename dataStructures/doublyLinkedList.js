class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.tail = null;
        this.head = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.length === 0) return undefined;

        let currentTail = this.tail;
        this.tail = currentTail.prev;
        this.tail.next = null;
        currentTail.prev = null;

        this.length--;

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }

        return currentTail;
    }

    shift() {
        if (!this.head) return undefined;

        let oldHead = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead
    }
}

const doublyLinkedList = new DoublyLinkedList();

doublyLinkedList.push(53);
doublyLinkedList.push(13);
doublyLinkedList.push(56);
doublyLinkedList.push(95);
doublyLinkedList.push(85);

doublyLinkedList.pop();

console.log(doublyLinkedList);