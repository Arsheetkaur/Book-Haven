// JavaScript to add functionality to the "Buy Now" buttons
document.addEventListener('DOMContentLoaded', () => {
    // Select all "Buy Now" buttons
    const buyNowButtons = document.querySelectorAll('.book-card button');

    // Loop through each button and add a click event listener
    buyNowButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const bookCard = event.target.parentElement;
            const bookTitle = bookCard.querySelector('h3').innerText;
            const bookPrice = bookCard.querySelector('p').innerText;

            // Display a confirmation message
            alert(`You added "${bookTitle}" to your cart for ${bookPrice}. `);
        });
    });
});
// Select the form and the search input
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('searchInput');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from reloading the page on submit

  const searchTerm = searchInput.value.trim(); // Get the search term

  if (searchTerm) {
      // Redirect directly to the search results page
      window.location.href = "search-results.html?q=" + encodeURIComponent(searchTerm);
  } else {
      alert("Please enter a search term.");
  }
});