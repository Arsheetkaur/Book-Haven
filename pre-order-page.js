document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pre-order-form');
    const confirmationSection = document.getElementById('confirmation-section');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the form from reloading the page

        // Simulate form submission with a delay for demo purposes
        setTimeout(() => {
            // Hide the pre-order form and show the confirmation message
            form.style.display = 'none';
            confirmationSection.style.display = 'block';
        }, 500); // 500ms delay to simulate form processing
    });
});
