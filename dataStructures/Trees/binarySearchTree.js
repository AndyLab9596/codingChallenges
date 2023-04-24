class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;

            while (true) {
                if (value === current.value) return undefined;

                if (value < current.value) {
                    if (!current.left) {
                        current.left = newNode
                        return this;
                    };
                    current = current.left
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = newNode;
                        return this
                    }
                    current = current.right
                }
            }
        }
    }
    search(value) {
        if (!this.root) return undefined;
        else {
            var current = this.root;
            var found = false;
            while (!!current && !found) {
                if (current.value === value) {
                    found = true
                } else if (current.value > value) {
                    current = current.right;
                } else if (current.value < value) {
                    current = current.left
                }
            }

            return current ? current : undefined
        }
    }
}

const testBST = new BinarySearchTree();
testBST.insert(10);
testBST.insert(6);
testBST.insert(3);
testBST.insert(8);
testBST.insert(15);
testBST.insert(20);


console.log(testBST);