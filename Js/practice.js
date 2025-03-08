// Initialize Ace Editor
let editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");
editor.setValue(`# Implement Stack here

class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if len(self.stack) > 0:
            return self.stack.pop()
        else:
            return "Stack is empty!"

    def peek(self):
        if len(self.stack) > 0:
            return self.stack[-1]
        else:
            return "Stack is empty!"

# Test the stack
s = Stack()
s.push(10)
s.push(20)
print(s.pop())  # Should print 20
print(s.peek())  # Should print 10
`);

// Function to run code locally in the browser (simple simulation)
function runCode() {
    let code = editor.getValue();
    let outputElement = document.getElementById("output");

    try {
        // Eval function is used to simulate Python code running (this is just for demo purposes)
        // In a real scenario, you would send this code to the backend to evaluate.
        let output = eval(code);
        outputElement.innerText = output;
    } catch (error) {
        outputElement.innerText = "Error in code: " + error;
    }
}

// Function to simulate submission
function submitCode() {
    let code = editor.getValue();
    let feedbackElement = document.getElementById("feedback");

    // Here, you'd typically send the code to a server for validation
    let correctAnswer = `class Stack:
    def __init__(self):
        self.stack = []

    def push(self, item):
        self.stack.append(item)

    def pop(self):
        if len(self.stack) > 0:
            return self.stack.pop()
        else:
            return "Stack is empty!"

    def peek(self):
        if len(self.stack) > 0:
            return self.stack[-1]
        else:
            return "Stack is empty!"`;

    // Simple string comparison for demo (In a real-world app, this would be much more sophisticated)
    if (code.trim() === correctAnswer.trim()) {
        feedbackElement.innerHTML = "<p style='color: green;'>Correct! You have successfully implemented the stack.</p>";
    } else {
        feedbackElement.innerHTML = "<p style='color: red;'>Incorrect implementation. Please review your code.</p>";
    }
}
