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

    shift () {
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }

    unshift (val) {
        let newHead = new Node(val)
        if (!this.head) {
            this.head = newHead;
            this.tail = this.head;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index > this.length) return undefined;

        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode;
    }

    insert(index, val) {
        if (index === 0) this.unshift(val);
        else if (index === this.length - 1) this.push(val);

        let insertedNode = new Node(val);
        let beforeInsertedNode = this.get(index - 1);
        let previousNode = beforeInsertedNode.next;
        beforeInsertedNode.next = insertedNode;
        insertedNode.next = previousNode;
        this.length++;

        return true;
    }

    reverse () {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }

    print() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next
        }

        console.log(arr);
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

// singlyLinkedList.shift();
// singlyLinkedList.pop();

// console.log(singlyLinkedList.get(2));

singlyLinkedList.insert(2, 33);
singlyLinkedList.print();
console.log(singlyLinkedList);
