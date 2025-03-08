class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    break;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    break;
                }
                current = current.right;
            }
        }
    }

    delete(value) {
        this.root = this.deleteRec(this.root, value);
    }

    deleteRec(root, value) {
        if (!root) return root;

        if (value < root.value) {
            root.left = this.deleteRec(root.left, value);
        } else if (value > root.value) {
            root.right = this.deleteRec(root.right, value);
        } else {
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            root.value = this.minValue(root.right);
            root.right = this.deleteRec(root.right, root.value);
        }
        return root;
    }

    minValue(node) {
        let current = node;
        while (current.left) {
            current = current.left;
        }
        return current.value;
    }

    clear() {
        this.root = null;
    }
}

const bst = new BST();
const canvas = document.getElementById("bstCanvas");
const ctx = canvas.getContext("2d");

function insertNode() {
    const value = parseInt(document.getElementById("nodeValue").value);
    if (!isNaN(value)) {
        bst.insert(value);
        document.getElementById("nodeValue").value = '';
        drawTree();
    }
}

function deleteNode() {
    const value = parseInt(document.getElementById("nodeValue").value);
    if (!isNaN(value)) {
        bst.delete(value);
        document.getElementById("nodeValue").value = '';
        drawTree();
    }
}

function clearTree() {
    bst.clear();
    drawTree();
}

function drawTree() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawNode(bst.root, canvas.width / 2, 40, canvas.width / 4);
}

function drawNode(node, x, y, offset) {
    if (!node) return;
    
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = 'lightblue';
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'black';
    ctx.fillText(node.value, x - 5, y + 5);

    if (node.left) {
        ctx.moveTo(x, y);
        ctx.lineTo(x - offset, y + 60);
        ctx.stroke();
        drawNode(node.left, x - offset, y + 60, offset / 2);
    }

    if (node.right) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + offset, y + 60);
        ctx.stroke();
        drawNode(node.right, x + offset, y + 60, offset / 2);
    }
}

drawTree();
