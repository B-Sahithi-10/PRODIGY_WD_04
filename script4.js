// Optional: Add interactive features for navigation, form validation, or other functionalities
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Message Sent Successfully!");
    });
});
