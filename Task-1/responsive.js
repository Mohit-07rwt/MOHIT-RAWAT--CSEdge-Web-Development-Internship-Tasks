// JavaScript can be added here for interactive features, but it's not necessary for basic functionality of the landing page.
// Example: Adding a smooth scroll effect for anchor links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
