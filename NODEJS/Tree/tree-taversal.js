class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    // Inserts a new unique value in the Tree
    insert(val) {
        const newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            let root = this.root;
            let prev = null;
            while (root != null) {      //find correct position for insertion
                // if (root.value === val) return undefined; // Handle Duplicates
                prev = root;
                root = val > root.value ? root.right : root.left;
            }
            if (val > prev.value)
                prev.right = newNode;
            else
                prev.left = newNode;
        }
        return this;
    }

    //find if the value is present in the BST
    find(val) {
        if (this.root != null) {
            let current = this.root;
            while (current != null) {
                if (current.value === val) return current;
                current = val > current.value ? current.right : current.left;
            }
        }
        return false;
    }

    breathFirstSearch(){
        let node = this.root, data = [], queue = [];
        queue.push(node);

        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
        return data;
    }

    // Depth First Search
    DFSpreOrder(){
        let data = [];
        function traverse(node){
            data.push(node.value)
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(this.root)
        return data;
    }

    DFSPostOrder(){
        let data = [];
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value)
        }
        traverse(this.root)
        return data;
    }

    DFSInOrder(){
        let data = [];
        function traverse(node){
            traverse(node.left)
            data.push(node.value)
            traverse(node.right)
        }
        traverse(this.root)
        return data;
    }
}

let tree = new Tree()