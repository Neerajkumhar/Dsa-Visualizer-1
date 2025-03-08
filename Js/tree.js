// Binary Tree Structure
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    add(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    inorder(node, callback) {
        if (node !== null) {
            this.inorder(node.left, callback);
            callback(node);
            this.inorder(node.right, callback);
        }
    }

    preorder(node, callback) {
        if (node !== null) {
            callback(node);
            this.preorder(node.left, callback);
            this.preorder(node.right, callback);
        }
    }

    postorder(node, callback) {
        if (node !== null) {
            this.postorder(node.left, callback);
            this.postorder(node.right, callback);
            callback(node);
        }
    }
}

// Create Binary Tree
const tree = new BinaryTree();
tree.add(50);
tree.add(30);
tree.add(70);
tree.add(20);
tree.add(40);
tree.add(60);
tree.add(80);

// D3.js Visualization
const width = 600, height = 400;

const svg = d3.select("#treeVisualization").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(40,40)");

const treeLayout = d3.tree().size([width - 80, height - 80]);

const root = d3.hierarchy(tree.root, d => d ? [d.left, d.right].filter(n => n) : []);

const links = svg.selectAll(".link")
    .data(treeLayout(root).links())
    .enter()
    .append("line")
    .attr("class", "link")
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y)
    .attr("stroke", "#ccc");

const nodes = svg.selectAll(".node")
    .data(root.descendants())
    .enter()
    .append("circle")
    .attr("class", "node")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", 20)
    .attr("fill", "#007acc");

// Traversal Animation
let delay = 500;

function highlightNode(node) {
    d3.select(nodes._groups[0][node.index])
        .transition().duration(500)
        .attr("fill", "#ff6347");
}

function inorderTraversal() {
    tree.inorder(tree.root, node => {
        setTimeout(() => highlightNode(node), delay);
        delay += 500;
    });
}

function preorderTraversal() {
    delay = 500;
    tree.preorder(tree.root, node => {
        setTimeout(() => highlightNode(node), delay);
        delay += 500;
    });
}

function postorderTraversal() {
    delay = 500;
    tree.postorder(tree.root, node => {
        setTimeout(() => highlightNode(node), delay);
        delay += 500;
    });
}
