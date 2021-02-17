class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Inserts a new unique value in the BST
    insert(val) {
        const newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            let root = this.root;
            let prev = null;
            while (root != null) {      //find correct position for insertion
                if (root.value === val) return undefined; // Handle Duplicates
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
}

let bst = new BST()