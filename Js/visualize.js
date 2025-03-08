// Visualize Sorting Algorithms
function visualizeSorting() {
    const canvas = document.getElementById('visualizationCanvas');
    canvas.innerHTML = '<h4>Sorting Visualization</h4>';
    canvas.innerHTML += '<p>Choose an algorithm to visualize:</p>';

    // Sorting Options
    const options = `
        <button onclick="startBubbleSort()">Bubble Sort</button>
        <button onclick="startMergeSort()">Merge Sort</button>
        <button onclick="startQuickSort()">Quick Sort</button>
    `;
    canvas.innerHTML += options;
}

function startBubbleSort() {
    const canvas = document.getElementById('visualizationCanvas');
    canvas.innerHTML = '<h4>Bubble Sort Visualization</h4>';
    
    // Insert the actual bubble sort visualization logic here
    visualizeBubbleSort();
}

function visualizeBubbleSort() {
    const array = [50, 30, 60, 10, 20, 70, 40];
    const canvas = document.getElementById('visualizationCanvas');
    canvas.innerHTML += '<p>Sorting: ' + array.join(', ') + '</p>';

    // Visualization logic for bubble sort
    let steps = [];
    let delay = 500;

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                steps.push([...array]);
            }
        }
    }

    // Play the sorting steps visually with delay
    steps.forEach((step, index) => {
        setTimeout(() => {
            canvas.innerHTML += `<p>Step ${index + 1}: ${step.join(', ')}</p>`;
        }, index * delay);
    });
}

// Visualize Binary Search Tree
function visualizeTree() {
    const canvas = document.getElementById('visualizationCanvas');
    canvas.innerHTML = '<h4>Binary Search Tree Visualization</h4>';

    // Insert the actual Binary Tree visualization logic here
    canvas.innerHTML += '<p>Coming Soon...</p>';
}

// Visualize Graph Algorithms
function visualizeGraph() {
    const canvas = document.getElementById('visualizationCanvas');
    canvas.innerHTML = '<h4>Graph Algorithm Visualization</h4>';

    // Insert the actual Graph visualization logic here
    canvas.innerHTML += '<p>Coming Soon...</p>';
}
