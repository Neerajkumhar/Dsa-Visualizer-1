function validateLogin(event) {
    event.preventDefault();  // Prevent form submission to allow validation

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both username and password.");
        return;
    }

    if (username === "admin" && password === "password123") {  // Placeholder validation logic
        alert("Login successful!");
        window.location.href = "index.html";  // Redirect to home page after successful login
    } else {
        alert("Incorrect username or password.");
    }
}
