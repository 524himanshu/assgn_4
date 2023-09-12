// script.js
// JavaScript code for any interactivity or validation can be added here

// Example: Add a simple form validation
document.querySelector("form").addEventListener("submit", function(event) {
    const quantity = parseInt(document.getElementById("quantity").value);

    if (isNaN(quantity) || quantity < 1) {
        alert("Quantity must be a positive number.");
        event.preventDefault(); // Prevent form submission
    }
});
