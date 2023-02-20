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
}

const testBST = new BinarySearchTree();
testBST.insert(56);
testBST.insert(41);
testBST.insert(27);
testBST.insert(27);
testBST.insert(69);
testBST.insert(61);
testBST.insert(80);


console.log(testBST);