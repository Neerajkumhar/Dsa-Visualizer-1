let array = [64, 34, 25, 12, 22, 11, 90];
const arrayContainer = document.getElementById("arrayContainer");

// Display the array as bars
function displayArray() {
    arrayContainer.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 5}px`; // Scale the height
        arrayContainer.appendChild(bar);
    });
}

// Bubble Sort Visualization
async function startSorting() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                // Swap elements
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                displayArray(); // Update the display after
