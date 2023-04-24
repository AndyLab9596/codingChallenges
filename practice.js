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


    BFS() {
        let queue = [];
        let visited = [];
        let node = this.root;
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            visited.push(node.value);

            if (node.left) {
                queue.push(node.left);
            } 

            if (node.right) {
                queue.push(node.right);
            }
        }
        return visited;
    }

    DFSPreOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            data.push(node.value);
            
            if (node.left) {
                traverse(node.left)
            }

            if (node.right) {
                traverse(node.right)
            }
        }

        traverse(current);

        return data;
    }

    DFSPostOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }

            if (node.right) {
                traverse(node.right)
            }

            data.push(node.value);
        }

        traverse(current);

        return data;
    }

    DFSInOrder() {
        var data = [];
        var current = this.root;

        function traverse(node) {
            if (node.left) {
                traverse(node.left)
            }
            data.push(node.value);

            if (node.right) {
                traverse(node.right)
            }

        }

        traverse(current);

        return data;
    }
}

const testBST = new BinarySearchTree();
testBST.insert(10);
testBST.insert(6);
testBST.insert(15);
testBST.insert(3);
testBST.insert(8);
testBST.insert(20);
console.log(testBST);

//               10
//           6       15
//         3   8       20

// console.log(testBST.BFS());
console.log(testBST.DFSPreOrder());
console.log(testBST.DFSPostOrder());