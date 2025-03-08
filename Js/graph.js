const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let nodeIdCounter = 1; // Node ID counter
let graph = {
    nodes: [],
    edges: [],
};

// Function to add a new node
function addNode(event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left; // Get x position
    const y = event.clientY - rect.top;  // Get y position

    // Create a new node with a unique ID and position
    graph.nodes.push({ id: nodeIdCounter++, x: x, y: y });
    drawGraph(); // Redraw the graph
    console.log('Nodes:', graph.nodes); // Debugging: log the current nodes
}

// Function to draw the graph
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw edges
    graph.edges.forEach(edge => {
        const fromNode = graph.nodes.find(node => node.id === edge.from);
        const toNode = graph.nodes.find(node => node.id === edge.to);
        if (fromNode && toNode) {
            ctx.beginPath();
            ctx.moveTo(fromNode.x, fromNode.y);
            ctx.lineTo(toNode.x, toNode.y);
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
    });
    
    // Draw nodes
    graph.nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, 2 * Math.PI);
        ctx.fillStyle = '#007acc'; // Default color
        ctx.fill();
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = '#fff';
        ctx.font = '16px Arial';
        ctx.fillText(node.id, node.x - 5, node.y + 5); // Display node ID
    });
}

// Function to add an edge between two nodes
function addEdge() {
    const fromNodeId = parseInt(prompt('Enter the ID of the starting node:'));
    const toNodeId = parseInt(prompt('Enter the ID of the ending node:'));

    // Log the IDs entered by the user
    console.log(`From Node ID: ${fromNodeId}, To Node ID: ${toNodeId}`);

    const fromNode = graph.nodes.find(node => node.id === fromNodeId);
    const toNode = graph.nodes.find(node => node.id === toNodeId);
    
    if (fromNode && toNode) {
        graph.edges.push({ from: fromNodeId, to: toNodeId });
        drawGraph(); // Redraw the graph
    } else {
        alert('Invalid node IDs! Please ensure you entered the correct IDs. Current nodes: ' + graph.nodes.map(n => n.id).join(', '));
    }
}

// Function to reset the graph
function resetGraph() {
    graph = { nodes: [], edges: [] };
    nodeIdCounter = 1;
    drawGraph(); // Redraw the graph
}

// Event listeners
canvas.addEventListener('click', addNode);
document.getElementById('add-edge').addEventListener('click', addEdge);
document.getElementById('reset-visualization').addEventListener('click', resetGraph);

// Initial instructions
document.getElementById('info-text').textContent = 'Click on the canvas to add nodes.';
