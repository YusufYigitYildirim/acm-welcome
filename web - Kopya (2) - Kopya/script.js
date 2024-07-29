// JavaScript to handle the mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarLinks = document.getElementById('navbar-links');

    // Toggle menu on button click
    navbarToggle.addEventListener('click', function() {
        navbarLinks.classList.toggle('active');
    });
});


