document.addEventListener("DOMContentLoaded", function () {
    const cartCount = document.getElementById("cart-count");
    let cartItems = 0;

    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach((button) => {
        button.addEventListener("click", function () {
            cartItems++;
            cartCount.textContent = cartItems;
            alert("New Arrival added to cart!");
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