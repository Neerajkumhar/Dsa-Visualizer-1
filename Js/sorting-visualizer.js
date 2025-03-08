let array = [];
let speed = 500;
let stopRequested = false;  // Global flag to stop sorting
let arraySize = 10;

function updateSpeed() {
  speed = parseInt(document.getElementById("speed").value);
}

function generateArray() {
  stopRequested = false; // reset stop flag on new array generation
  array = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 1);
  renderArray();
  document.getElementById("step-description").textContent = "New array generated. Choose a sorting algorithm to start.";
}

function renderArray(highlightIndices = []) {
  const container = document.getElementById("arrayContainer");
  container.innerHTML = "";
  array.forEach((value, index) => {
    const bar = document.createElement("div");
    bar.className = "array-bar";
    bar.style.height = `${value * 3}px`;
    bar.textContent = value;
    if (highlightIndices.includes(index)) bar.classList.add("swapping");
    container.appendChild(bar);
  });
}

function stopSortingProcess() {
  stopRequested = true;
  document.getElementById("step-description").textContent = "Sorting Stopped!";
}

function resetSorting() {
  stopRequested = true; // Stop any ongoing sort
  // Slight delay to ensure current process halts before regenerating array
  setTimeout(() => {
    stopRequested = false;
    generateArray();
  }, speed);
}

async function bubbleSort() {
  let n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (stopRequested) return;
      document.getElementById("step-description").textContent = `Comparing index ${j} and ${j + 1}`;
      renderArray([j, j + 1]);
      await new Promise(resolve => setTimeout(resolve, speed));
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        renderArray([j, j + 1]);
        await new Promise(resolve => setTimeout(resolve, speed));
      }
    }
  }
  document.getElementById("step-description").textContent = "Bubble Sort Completed!";
}

async function selectionSort() {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    if (stopRequested) return;
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (stopRequested) return;
      document.getElementById("step-description").textContent = `Comparing index ${minIdx} and ${j}`;
      renderArray([minIdx, j]);
      await new Promise(resolve => setTimeout(resolve, speed));
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    if (minIdx !== i) {
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
      renderArray([i, minIdx]);
      await new Promise(resolve => setTimeout(resolve, speed));
    }
  }
  document.getElementById("step-description").textContent = "Selection Sort Completed!";
}

async function insertionSort() {
  let n = array.length;
  for (let i = 1; i < n; i++) {
    if (stopRequested) return;
    let key = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > key) {
      if (stopRequested) return;
      document.getElementById("step-description").textContent = `Moving ${array[j]} to position ${j + 1}`;
      array[j + 1] = array[j];
      renderArray([j, j + 1]);
      await new Promise(resolve => setTimeout(resolve, speed));
      j = j - 1;
    }
    array[j + 1] = key;
    renderArray([j + 1]);
    await new Promise(resolve => setTimeout(resolve, speed));
  }
  document.getElementById("step-description").textContent = "Insertion Sort Completed!";
}

async function mergeSortHandler() {
  stopRequested = false; // Ensure stop flag is reset
  array = await mergeSort(array, 0, array.length - 1);
  if (!stopRequested) {
    document.getElementById("step-description").textContent = "Merge Sort Completed!";
  }
}

async function mergeSort(arr, left, right) {
  if (stopRequested) return arr;
  if (left >= right) return arr;
  let mid = Math.floor((left + right) / 2);
  await mergeSort(arr, left, mid);
  if (stopRequested) return arr;
  await mergeSort(arr, mid + 1, right);
  if (stopRequested) return arr;
  await merge(arr, left, mid, right);
  return arr;
}

async function merge(arr, left, mid, right) {
  let temp = [];
  let i = left, j = mid + 1;
  while (i <= mid && j <= right) {
    if (stopRequested) return;
    document.getElementById("step-description").textContent = `Merging elements ${arr[i]} and ${arr[j]}`;
    if (arr[i] < arr[j]) {
      temp.push(arr[i++]);
    } else {
      temp.push(arr[j++]);
    }
    renderArray();
    await new Promise(resolve => setTimeout(resolve, speed));
  }
  while (i <= mid) {
    temp.push(arr[i++]);
  }
  while (j <= right) {
    temp.push(arr[j++]);
  }
  for (let k = left, idx = 0; k <= right; k++, idx++) {
    arr[k] = temp[idx];
  }
  renderArray();
}

function changeArraySize() {
  arraySize = parseInt(document.getElementById("array-size").value);
  generateArray();
}

// Initialize with a new array on page load
generateArray();