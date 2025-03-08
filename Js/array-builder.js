let array = [];

// Function to build the array from input
function buildArray() {
    const input = document.getElementById("arrayInput").value;
    if (input.trim() === "") {
        alert("Please enter valid values for the array.");
        return;
    }
    array = input.split(",").map(Number);
    displayArray();
}

// Function to display the array
function displayArray() {
    const arrayDisplay = document.getElementById("arrayDisplay");
    arrayDisplay.innerHTML = ""; // Clear current display

    if (array.length === 0) {
        arrayDisplay.innerHTML = "<p>No elements in the array.</p>";
    } else {
        array.forEach((value, index) => {
            const div = document.createElement("div");
            div.className = "array-element";
            div.innerText = `Index ${index}: ${value}`;
            arrayDisplay.appendChild(div);
        });
    }
}

// Function to insert a value at a specific index
function insertValue() {
    const value = document.getElementById("insertValue").value;
    const index = document.getElementById("insertIndex").value;

    if (value === "" || index === "") {
        alert("Please enter both value and index.");
        return;
    }

    if (index < 0 || index > array.length) {
        alert("Invalid index.");
        return;
    }

    array.splice(index, 0, parseInt(value));
    displayArray();
}

// Function to delete a value at a specific index
function deleteValue() {
    const index = document.getElementById("deleteIndex").value;

    if (index === "" || index < 0 || index >= array.length) {
        alert("Please enter a valid index.");
        return;
    }

    array.splice(index, 1);
    displayArray();
}

// Function to update a value at a specific index
function updateValue() {
    const index = document.getElementById("updateIndex").value;
    const newValue = document.getElementById("updateValue").value;

    if (index === "" || newValue === "") {
        alert("Please enter both index and new value.");
        return;
    }

    if (index < 0 || index >= array.length) {
        alert("Invalid index.");
        return;
    }

    array[index] = parseInt(newValue);
    displayArray();
}
