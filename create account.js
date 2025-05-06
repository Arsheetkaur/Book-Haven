// Handle account creation functionality
document.getElementById('createAccountForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();

    if (!fullName || !email || !password || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Example validation (replace this with backend code)
    alert(`Welcome, ${fullName}! Your account has been created.`);
    window.location.href = 'Main Project.html';
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