// Rating System
let ratingValue = 0;

// Set rating on star click
function rate(star) {
    ratingValue = star;
    const stars = document.querySelectorAll('.star');
    stars.forEach((starElement, index) => {
        if (index < star) {
            starElement.style.color = 'gold';
        } else {
            starElement.style.color = '#ccc';
        }
    });

    // Update hidden rating input
    document.getElementById('rating-value').value = ratingValue;
}

// Handle comment form submission
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;
    const rating = document.getElementById('rating-value').value;

    if (username && comment && rating) {
        alert(`Thank you, ${username}! Your comment has been submitted.`);
        
        // Optionally, clear the form after submission
        document.getElementById('username').value = '';
        document.getElementById('comment').value = '';
        ratingValue = 0;
        document.getElementById('rating-value').value = '';

        // Dynamically add the new comment to the carousel
        const newTestimonial = document.createElement('div');
        newTestimonial.classList.add('testimonial-box');
        newTestimonial.innerHTML = `
            <img src="https://i.pinimg.com/736x/bb/8a/91/bb8a91a047deaa78f7a89228f80d92da.jpg" alt="${username}">
            <p class="quote">"${comment}"</p>
            <p class="author">${username}</p>
            <div class="rating">${'★'.repeat(parseInt(rating))}${'☆'.repeat(5 - parseInt(rating))}</div>
        `;

        // Append the new testimonial to the carousel
        document.querySelector('.comments-carousel').appendChild(newTestimonial);

        // Optionally, animate the new testimonial
        newTestimonial.classList.add('fade-in');
        setTimeout(() => {
            newTestimonial.classList.remove('fade-in');
        }, 1000);
    } else {
        alert("Please fill in all fields before submitting.");
    }
});