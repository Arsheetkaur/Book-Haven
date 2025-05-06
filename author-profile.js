// JavaScript to toggle visibility of books section when "Explore Books" button is clicked
document.querySelector('.explore-btn').addEventListener('click', function (event) {
  event.preventDefault();

  // Select the books section
  const booksSection = document.querySelector('.books');

  // Toggle the visibility of the books section
  booksSection.classList.toggle('visible');

  // Optionally, scroll to the books section if you want it to appear at the top
  if (booksSection.classList.contains('visible')) {
      booksSection.scrollIntoView({ behavior: 'smooth' });
  }
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