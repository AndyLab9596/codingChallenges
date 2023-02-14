class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.head) {
           this.head = newNode;
           this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop () {
        if (this.length === 0) return undefined;

        let newTail = null;
        let current = this.head;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length --;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

const singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(22);
singlyLinkedList.push(2);
singlyLinkedList.push(77);
singlyLinkedList.push(6);
singlyLinkedList.push(43);
singlyLinkedList.push(76);
singlyLinkedList.push(89);
singlyLinkedList.push(90);

singlyLinkedList.pop();

console.log(singlyLinkedList);
