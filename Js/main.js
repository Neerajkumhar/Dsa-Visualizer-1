// // main.js

// // Function to toggle more reviews visibility
// function toggleMoreReviews() {
//     const moreReviews = document.querySelectorAll('.extra-review');
//     moreReviews.forEach(review => {
//         review.classList.toggle('visible');
//     });

//     const toggleButton = document.getElementById('toggle-reviews-btn');
//     if (toggleButton.innerText === 'Show More Reviews') {
//         toggleButton.innerText = 'Show Less Reviews';
//     } else {
//         toggleButton.innerText = 'Show More Reviews';
//     }
// }

// // Add event listener for the "Show More Reviews" button if it exists
// const toggleButton = document.getElementById('toggle-reviews-btn');
// if (toggleButton) {
//     toggleButton.addEventListener('click', toggleMoreReviews);
// }

// // Function for smooth scrolling to sections
// function smoothScroll(target) {
//     const element = document.querySelector(target);
//     if (element) {
//         element.scrollIntoView({ behavior: 'smooth' });
//     }
// }

// // Add smooth scroll to navigation links
// const navLinks = document.querySelectorAll('nav ul li a');
// navLinks.forEach(link => {
//     link.addEventListener('click', (event) => {
//         event.preventDefault();
//         const targetSection = link.getAttribute('href');
//         smoothScroll(targetSection);
//     });
// });

// // Simple form validation for adding teacher reviews (if a form exists)
// function validateReviewForm(event) {
//     const nameField = document.getElementById('teacher-name');
//     const reviewField = document.getElementById('review-text');
//     const ratingField = document.getElementById('review-rating');

//     if (!nameField.value || !reviewField.value || !ratingField.value) {
//         event.preventDefault();
//         alert('Please fill out all fields before submitting the review.');
//     }
// }

// const reviewForm = document.getElementById('review-form');
// if (reviewForm) {
//     reviewForm.addEventListener('submit', validateReviewForm);
// }

// // Additional JS for any other future functionalities can be added here


// document.querySelectorAll('.area-item').forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         item.style.transform = 'scale(1.05)';
//         item.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
//     });

//     item.addEventListener('mouseleave', () => {
//         item.style.transform = 'scale(1)';
//         item.style.boxShadow = 'none';
//     });
// });
 // Toggle chatbot visibility
 function toggleChat() {
    const chatbot = document.getElementById('chatbot');
    const isVisible = chatbot.style.display === 'block';
    chatbot.style.display = isVisible ? 'none' : 'block';
    document.querySelector('.chatbot-toggle').style.display = isVisible ? 'flex' : 'none';
}

// Send user message and get response
function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatBody = document.getElementById('chatBody');

    if (userInput.trim() === '') return;

    // Display user message
    const userMessage = document.createElement('div');
    userMessage.className = 'message user';
    userMessage.textContent = userInput;
    chatBody.appendChild(userMessage);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Get bot response
    const botResponse = getBotResponse(userInput);
    const botMessage = document.createElement('div');
    botMessage.className = 'message bot';
    botMessage.textContent = botResponse;
    setTimeout(() => {
        chatBody.appendChild(botMessage);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 500); // Simulate typing delay

    // Clear input
    document.getElementById('userInput').value = '';
}

// Define bot responses
function getBotResponse(input) {
    const lowerInput = input.toLowerCase().trim();

    if (lowerInput.includes('sign up')) {
        return 'To sign up, visit the "Join Virtual Lab" section on our website, fill out your name, email, and choose a lab, then click "Sign Up"!';
    } else if (lowerInput.includes('lab') || lowerInput.includes('experiment')) {
        return 'We offer: Electronics Circuits, Computer Networks, and Mechanical Simulations. Explore them on the "Featured Experiments" section!';
    } else if (lowerInput.includes('help')) {
        return 'I can assist with sign-up, lab info, or navigation. Try asking "How do I sign up?" or "What labs are available?"';
    } else if (lowerInput.includes('contact')) {
        return 'You can contact us at support@virtuallab.com. Check the website footer for more details!';
    } else {
        return 'Sorry, I didn’t understand that. Try asking about "sign up", "labs", "help", or "contact"!';
    }
}

// Allow Enter key to send message
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Show toggle button on load
window.onload = function() {
    document.querySelector('.chatbot-toggle').style.display = 'flex';
};
