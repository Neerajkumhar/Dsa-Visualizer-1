let queue = [];

function updateQueueDisplay() {
    const queueContainer = document.getElementById('queueContainer');
    queueContainer.innerHTML = '';  // Clear existing elements
    for (let i = 0; i < queue.length; i++) {
        const element = document.createElement('div');
        element.className = 'queue-element';
        element.innerText = queue[i];
        queueContainer.appendChild(element);
    }
}

function enqueueToQueue() {
    const value = prompt("Enter a value to enqueue:");
    if (value) {
        queue.push(value);
        updateQueueDisplay();
    }
}

function dequeueFromQueue() {
    if (queue.length > 0) {
        alert(`Dequeued value: ${queue.shift()}`);
        updateQueueDisplay();
    } else {
        alert("Queue is empty!");
    }
}

updateQueueDisplay();
